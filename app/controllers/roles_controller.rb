class RolesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        roles = Role.select(:id, :name).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: roles
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        role = Role.find(params[:id])
        status = 400
        status = 200 if role.present? && role.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        role = Role.new(params.permit!.except(:controller, :action))
        status = role.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        role = Role.find(params[:id])

        render json: {
            data: {
                model: role
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        role = Role.find(params[:id])
        if role.present?
            role.name = params[:name] if params.key?(:name)

            status = role.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
