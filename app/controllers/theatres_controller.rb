class TheatresController < ApplicationController
    def index
        theatres = Theatre.select(:name, :description, :image_path, :updated_at).order(created_at: :desc)

        render json: {
            data: {
                theatres: theatres
            }
        }, status: 200
    end
end
