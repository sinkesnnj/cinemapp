class ShowtimesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        sql_query = "SELECT s.id, m.name AS movie_name, t.name AS theatre_name, s.projection_date, TIME_FORMAT(s.projection_time, '%H:%i') AS projection_time
            FROM showtimes s
                LEFT JOIN movies m ON s.movie_id = m.id
                LEFT JOIN theatres t ON s.theatre_id = t.id
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
        return unless is_admin?

        showtime = Showtime.find(params[:id])
        status = 400
        status = 200 if showtime.present? && showtime.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        if Movie.find(params[:movie_id]).blank? && Theatre.find(params[:theatre_id]).blank?
            status = 400
        else
            showtime = Showtime.new(params.permit!.except(:controller, :action))
            status = showtime.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        showtime = Showtime.find(params[:id])
        showtime.projection_time = showtime.projection_time.strftime("%H:%M")

        render json: {
            data: {
                model: showtime
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        showtime = Showtime.find(params[:id])
        if showtime.present? && Movie.find(params[:movie_id]).present? && Theatre.find(params[:theatre_id]).present?
            showtime.movie_id = params[:movie_id] if params.key?(:movie_id)
            showtime.theatre_id = params[:theatre_id] if params.key?(:theatre_id)
            showtime.projection_date = params[:projection_date] if params.key?(:projection_date)
            showtime.projection_time = params[:projection_time] if params.key?(:projection_time)

            status = showtime.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
