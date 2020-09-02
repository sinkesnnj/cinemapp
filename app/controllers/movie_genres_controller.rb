class MovieGenresController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        sql_query = "SELECT ma.id, m.name AS movie_name, a.genre_name AS genre_name
            FROM movie_genres ma
                LEFT JOIN movies m ON ma.movie_id = m.id
                LEFT JOIN genres a ON ma.genre_id = a.id
            ORDER BY ma.id DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        movie_genres = MovieGenre.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: movie_genres
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?
        
        movie_genre = MovieGenre.find(params[:id])
        status = 400
        status = 200 if movie_genre.present? && movie_genre.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        if Movie.find(params[:movie_id]).blank? || Genre.find(params[:genre_id]).blank?
            status = 400
        else
            movie_genre = MovieGenre.new(params.permit!.except(:controller, :action))
            status = movie_genre.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        movie_genre = MovieGenre.find(params[:id])

        render json: {
            data: {
                model: movie_genre
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        movie_genre = MovieGenre.find(params[:id])
        if movie_genre.present?
            movie_genre.movie_id = params[:movie_id] if params.key?(:movie_id)
            movie_genre.genre_id = params[:genre_id] if params.key?(:genre_id)

            status = movie_genre.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
