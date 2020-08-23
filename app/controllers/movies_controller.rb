class MoviesController < ApplicationController
    def dashboard
        movies = Movie.select(:name, :summary, :poster_path).order(created_at: :desc).limit(6)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end

    def index
        movies = Movie.select(:name, :summary, :poster_path).order(created_at: :desc).limit(4)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end
end
