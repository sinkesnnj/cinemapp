class NewsController < ApplicationController
    def carousel
        news = News.select(:title, :short_description, :poster_path).order(created_at: :desc).limit(3)

        render json: {
            data: {
                news: news
            }
        }, status: 200
    end

    def index
        news = News.select(:title, :short_description, :poster_path, :updated_at).order(created_at: :desc).limit(3)

        render json: {
            data: {
                news: news
            }
        }, status: 200
    end
end
