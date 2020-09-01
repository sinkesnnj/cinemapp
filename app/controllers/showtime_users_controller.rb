class ShowtimeUsersController < ApplicationController
    def admin
        sql_query = "SELECT su.id, m.name AS movie_name, t.name AS theatre_name, u.email AS user_email, su.row_number, su.seat_number
            FROM showtime_users su
                JOIN showtimes s ON su.showtime_id = s.id
                JOIN movies m ON s.movie_id = m.id
                JOIN theatres t ON s.theatre_id = t.id
                JOIN users u ON su.user_id = u.id
            ORDER BY s.created_at DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        showtimes = ShowtimeUser.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: showtimes
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        showtime = ShowtimeUser.find(params[:id])
        status = 400
        status = 200 if showtime.present? && showtime.destroy

        render json: {}, status: status
    end
end
