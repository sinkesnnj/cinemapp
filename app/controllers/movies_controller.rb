class MoviesController < ApplicationController
    def dashboard
        movies = Movie.select(:id, :name, :summary, :poster_path).order(created_at: :desc).limit(6)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end

    def index
        movies = Movie.select(:id, :name, :summary, :poster_path).order(created_at: :desc).limit(4)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end

    def show
        movie = Movie.where(id: params[:id]).first

        render json: {
            data: {
                movie: movie
            }
        }, status: 200
    end
end
