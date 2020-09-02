class UserRolesController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        sql_query = "SELECT ar.id, a.name AS user_name, r.name AS role_name
            FROM user_roles ar
                LEFT JOIN users a ON ar.user_id = a.id
                LEFT JOIN roles r ON ar.role_id = r.id
            ORDER BY ar.id DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        user_roles = UserRole.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: user_roles
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        user_role = UserRole.find(params[:id])
        status = 400
        status = 200 if user_role.present? && user_role.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        if User.find(params[:user_id]).blank? || Role.find(params[:role_id]).blank?
            status = 400
        else
            user_role = UserRole.new(params.permit!.except(:controller, :action))
            status = user_role.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        user_role = UserRole.find(params[:id])

        render json: {
            data: {
                model: user_role
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        user_role = UserRole.find(params[:id])
        if user_role.present?
            user_role.role_id = params[:role_id] if params.key?(:role_id)
            user_role.user_id = params[:user_id] if params.key?(:user_id)

            status = user_role.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
