class MoviesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

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

    def admin
        movies = Movie.select('id', 'name', 'release_date', 'run_time', 'rating').order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: movies
            }
        }, status: 200
    end

    def destroy
        movie = Movie.find(params[:id])
        status = 400
        status = 200 if movie.present? && movie.destroy

        render json: {}, status: status
    end

    def create
        movie = Movie.new(params.permit!.except(:controller, :action))
        status = movie.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        movie = Movie.find(params[:id])

        render json: {
            data: {
                model: movie
            }
        }, status: 200
    end

    def update
        movie = Movie.find(params[:id])
        if movie.present?
            movie.name = params[:name] if params.key?(:name)
            movie.summary = params[:summary] if params.key?(:summary)
            movie.release_date = params[:release_date] if params.key?(:release_date)
            movie.run_time = params[:run_time] if params.key?(:run_time)
            movie.poster_path = params[:poster_path] if params.key?(:poster_path)
            movie.rating = params[:rating] if params.key?(:rating)

            status = movie.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
