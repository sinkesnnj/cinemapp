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
end
