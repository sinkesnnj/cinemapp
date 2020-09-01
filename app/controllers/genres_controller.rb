class GenresController < ApplicationController
    def admin
        genres = Genre.select(:id, :genre_name).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: genres
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        genre = Genre.find(params[:id])
        status = 400
        status = 200 if genre.present? && genre.destroy

        render json: {}, status: status
    end
end
