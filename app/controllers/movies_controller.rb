class MoviesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update, :comment]

    def dashboard
        movies = Movie.select(:id, :name, :summary, :poster_path).order(created_at: :desc).offset((params[:page].to_i-1)*6).limit(7)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end

    def showtimes
        showtimes = Showtime.where('projection_date > ?', DateTime.now.utc).where(movie_id: params[:id]).order(projection_date: :asc, projection_time: :asc)

        render json: {
            data: {
                showtimes: showtimes
            }
        }, status: 200
    end

    def index
        movies = Movie.select(:id, :name, :summary, :poster_path).order(created_at: :desc).offset((params[:page].to_i-1)*4).limit(5)

        render json: {
            data: {
                movies: movies
            }
        }, status: 200
    end

    def show
        movie = Movie.where(id: params[:id]).first
        actors = Actor.find_by_sql(["SELECT a.id, a.name, a.surname FROM actors a JOIN movie_actors ma ON a.id = ma.actor_id WHERE ma.movie_id = :movie_id", {movie_id: movie.id}])
        genre = Genre.find_by_sql(["SELECT DISTINCT g.genre_name FROM genres g JOIN movie_genres mg ON g.id = mg.genre_id WHERE mg.movie_id = :movie_id", {movie_id: movie.id}])
        reviews = Review.where(movie_id: params[:id]).order(created_at: :asc)
        reviewers = User.where(id: reviews.map(&:user_id))

        render json: {
            data: {
                movie: movie,
                actors: actors,
                genre: genre,
                reviews: reviews,
                reviewers: reviewers
            }
        }, status: 200
    end

    def comment
        review = Review.new
        review.movie_id = params[:id]
        review.rating = params[:rating] if params.key?(:rating)
        review.review_text = params[:review_text] if params.key?(:review_text)
        review.user_id = current_user.id unless params.key?(:anonymous) && params[:anonymous].eql?(true)
        status = 400
        status = 200 if review.save
       
        reviews = Review.where(movie_id: params[:id]).order(created_at: :asc)
        reviewers = User.where(id: reviews.map(&:user_id))
        movie = Movie.where(id: params[:id]).first
        sum = Review.where(movie_id: params[:id]).sum(:rating)
        movie.rating = (sum/reviews.size).round
        movie.save
        render json: {
            data: {
                reviews: reviews,
                reviewers: reviewers,
                movie: movie
            }
        }, status: status
    end

    def admin
        return unless is_admin?
        
        movies = Movie.select('id', 'name', 'release_date', 'run_time', 'rating').order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: movies
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        movie = Movie.find(params[:id])
        status = 400
        status = 200 if movie.present? && movie.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        movie = Movie.new(params.permit!.except(:controller, :action))
        status = movie.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        movie = Movie.find(params[:id])

        render json: {
            data: {
                model: movie
            }
        }, status: 200
    end

    def update
        return unless is_admin?

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
