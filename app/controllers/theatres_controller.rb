class TheatresController < ApplicationController
    def index
        theatres = Theatre.select(:name, :description, :image_path, :updated_at).order(created_at: :desc)

        render json: {
            data: {
                theatres: theatres
            }
        }, status: 200
    end

    def admin
        theatres = Theatre.select(:id, :name, :seating_capacity).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: theatres
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        theatre = Theatre.find(params[:id])
        status = 400
        status = 200 if theatre.present? && theatre.destroy

        render json: {}, status: status
    end
end
