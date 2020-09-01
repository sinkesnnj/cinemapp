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
        if params[:search].present?
            news = News.where('title LIKE :search', search: "%#{params[:search]}%").limit(3)
        elsif params[:filter].present?
            news_categories = NewsCategorie.where(categorie_id: params[:filter])
            news_categories = news_categories.map(&:news_id)
            news = News.where(id: news_categories).limit(3)
        else
            news = News.select(:id, :title, :short_description, :poster_path, :updated_at).order(created_at: :desc).limit(3)
        end

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

    def categories
        most_popular = Categorie.order(Arel.sql('RAND()')).limit(6)

        render json: {
            data: {
                categories: most_popular
            }
        }, status: 200
    end

    def admin
        news = News.select(:id, :title, :release_date, :short_description).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: news
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        news = News.find(params[:id])
        status = 400
        status = 200 if news.present? && news.destroy

        render json: {}, status: status
    end
end
