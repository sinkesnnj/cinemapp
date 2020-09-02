class RolesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        roles = Role.select(:id, :role_type).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: roles
            }
        }, status: 200
    end

    def destroy
        role = Role.find(params[:id])
        status = 400
        status = 200 if role.present? && role.destroy

        render json: {}, status: status
    end

    def create
        role = Role.new(params.permit!.except(:controller, :action))
        status = role.save ? 200 : 400

        render json: {}, status: status
    end

    def edit
        role = Role.find(params[:id])

        render json: {
            data: {
                model: role
            }
        }, status: 200
    end

    def update
        role = Role.find(params[:id])
        if role.present?
            role.role_type = params[:role_type] if params.key?(:role_type)

            status = role.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
