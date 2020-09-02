class GenresController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        genres = Genre.select(:id, :genre_name).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: genres
            }
        }, status: 200
    end

    def destroy
        genre = Genre.find(params[:id])
        status = 400
        status = 200 if genre.present? && genre.destroy

        render json: {}, status: status
    end

    def create
        genre = Genre.new(params.permit!.except(:controller, :action))
        status = genre.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        genre = Genre.find(params[:id])

        render json: {
            data: {
                model: genre
            }
        }, status: 200
    end

    def update
        genre = Genre.find(params[:id])
        if genre.present?
            genre.genre_name = params[:genre_name] if params.key?(:genre_name)

            status = genre.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
