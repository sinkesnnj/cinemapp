class CategoriesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        categories = Categorie.order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: categories
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        categorie = Categorie.find(params[:id])
        status = 400
        status = 200 if categorie.present? && categorie.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        categorie = Categorie.new(params.permit!.except(:controller, :action))
        status = categorie.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        categorie = Categorie.find(params[:id])

        render json: {
            data: {
                model: categorie
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        categorie = Categorie.find(params[:id])
        if categorie.present?
            categorie.title = params[:title] if params.key?(:title)
            status = categorie.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
