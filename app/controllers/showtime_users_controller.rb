class ShowtimeUsersController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update, :reserve]

    def admin
        return unless is_admin?

        sql_query = "SELECT su.id, m.name AS movie_name, t.name AS theatre_name, u.email AS user_email, su.row_number, su.seat_number
            FROM showtime_users su
                LEFT JOIN showtimes s ON su.showtime_id = s.id
                LEFT JOIN movies m ON s.movie_id = m.id
                LEFT JOIN theatres t ON s.theatre_id = t.id
                LEFT JOIN users u ON su.user_id = u.id
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
        return unless is_admin?

        showtime = ShowtimeUser.find(params[:id])
        status = 400
        status = 200 if showtime.present? && showtime.destroy

        render json: {}, status: status
    end

    def show
        showtime_users = []
        8.times do
            row = []
            13.times do
                row << nil
            end
            showtime_users << row
        end

        su = ShowtimeUser.where(showtime_id: params[:id])
        su.each do |s|
            showtime_users[s.row_number][s.seat_number] = 'reserved'
        end

        render json: {
            data: {
                showtime_users: showtime_users
            }
        }, status: 200
    end

    def reserve
        if (Showtime.find(params[:id]).blank? && User.find(current_user.id).blank?)
            status = 400
        else
            params[:reserve].each do |reserved|
                showtime_user = ShowtimeUser.new
                showtime_user.showtime_id = params[:id]
                showtime_user.user_id = current_user.id
                showtime_user.row_number = reserved[0]
                showtime_user.seat_number = reserved[1]
                status = showtime_user.save ? 200 : 400
            end
        end

        render json: {}, status: 200
    end

    def create
        return unless is_admin?

        if (Showtime.find(params[:showtime_id]).blank? && User.find(params[:user_id]).blank?) || params[:row_number] > 7 || params[:seat_number] > 12
            status = 400
        else
            showtime_user = ShowtimeUser.new(params.permit!.except(:controller, :action))
            status = showtime_user.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        showtime_user = ShowtimeUser.find(params[:id])

        render json: {
            data: {
                model: showtime_user
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        showtime_user = ShowtimeUser.find(params[:id])
        if showtime_user.present? && Showtime.find(params[:showtime_id]).present? && User.find(params[:user_id]).present? && params[:row_number] < 8 && params[:seat_number] < 13
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
