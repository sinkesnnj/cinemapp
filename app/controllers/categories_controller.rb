class CategoriesController < ApplicationController
    def admin
        categories = Categorie.order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: categories
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        categorie = Categorie.find(params[:id])
        status = 400
        status = 200 if categorie.present? && categorie.destroy

        render json: {}, status: status
    end
end
