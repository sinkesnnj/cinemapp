class NewsCategoriesController < ApplicationController
    def admin
        sql_query = "SELECT nc.id, n.title AS news_title, c.title AS categorie_title
            FROM news_categories nc
                JOIN news n ON nc.news_id = n.id
                JOIN categories c ON nc.categorie_id = c.id
            ORDER BY nc.id DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        news_categories = NewsCategorie.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: news_categories
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        news_categorie = NewsCategorie.find(params[:id])
        status = 400
        status = 200 if news_categorie.present? && news_categorie.destroy

        render json: {}, status: status
    end

    def create
        if News.find(params[:news_id]).blank? || Categorie.find(params[:categorie_id]).blank?
            status = 400
        else
            news_categorie = NewsCategorie.new(params.permit!.except(:controller, :action))
            status = news_categorie.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        news_categorie = NewsCategorie.find(params[:id])

        render json: {
            data: {
                model: news_categorie
            }
        }, status: 200
    end

    def update
        news_categorie = NewsCategorie.find(params[:id])
        if news_categorie.present? && News.find(params[:news_id]).present? && Categorie.find(params[:categorie_id]).present?
            news_categorie.news_id = params[:news_id] if params.key?(:news_id)
            news_categorie.categorie_id = params[:categorie_id] if params.key?(:categorie_id)

            status = news_categorie.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
