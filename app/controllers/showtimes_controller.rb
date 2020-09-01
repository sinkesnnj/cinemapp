class ShowtimesController < ApplicationController
    def admin
        sql_query = "SELECT s.id, m.name AS movie_name, t.name AS theatre_name, s.projection_date, s.projection_time
            FROM showtimes s
                JOIN movies m ON s.movie_id = m.id
                JOIN theatres t ON s.theatre_id = t.id
            ORDER BY s.created_at DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        showtimes = Showtime.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: showtimes
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        showtime = Showtime.find(params[:id])
        status = 400
        status = 200 if showtime.present? && showtime.destroy

        render json: {}, status: status
    end
end
