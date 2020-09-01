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

    def create
        if Showtime.find(params[:showtime_id]).blank? && User.find(params[:user_id]).blank?
            status = 400
        else
            showtime_user = ShowtimeUser.new(params.permit!.except(:controller, :action))
            status = showtime_user.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        showtime_user = ShowtimeUser.find(params[:id])

        render json: {
            data: {
                model: showtime_user
            }
        }, status: 200
    end

    def update
        showtime_user = ShowtimeUser.find(params[:id])
        if showtime_user.present? && Showtime.find(params[:showtime_id]).present? && User.find(params[:user_id]).present?
            showtime_user.showtime_id = params[:showtime_id] if params.key?(:showtime_id)
            showtime_user.user_id = params[:user_id] if params.key?(:user_id)
            showtime_user.row_number = params[:row_number] if params.key?(:row_number)
            showtime_user.seat_number = params[:seat_number] if params.key?(:seat_number)

            status = showtime_user.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
