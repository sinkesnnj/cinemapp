class NewsController < ApplicationController
    def carousel
        news = News.select(:id, :title, :short_description, :poster_path).order(created_at: :desc).limit(3)

        render json: {
            data: {
                news: news
            }
        }, status: 200
    end

    def index
        news = News.select(:id, :title, :short_description, :poster_path, :updated_at).order(created_at: :desc).limit(3)

        render json: {
            data: {
                news: news
            }
        }, status: 200
    end

    def show
        news = News.where(id: params[:id]).first

        render json: {
            data: {
                news: news
            }
        }, status: 200
    end
end
