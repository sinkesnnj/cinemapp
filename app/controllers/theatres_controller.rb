class TheatresController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

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
        theatre = Theatre.find(params[:id])
        status = 400
        status = 200 if theatre.present? && theatre.destroy

        render json: {}, status: status
    end

    def create
        theatre = Theatre.new(params.permit!.except(:controller, :action))
        status = theatre.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        theatre = Theatre.find(params[:id])

        render json: {
            data: {
                model: theatre
            }
        }, status: 200
    end

    def update
        theatre = Theatre.find(params[:id])
        if theatre.present?
            theatre.name = params[:name] if params.key?(:name)
            theatre.seating_capacity = params[:seating_capacity] if params.key?(:seating_capacity)
            theatre.image_path = params[:image_path] if params.key?(:image_path)
            theatre.description = params[:description] if params.key?(:description)

            status = theatre.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
