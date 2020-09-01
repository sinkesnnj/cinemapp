class RolesController < ApplicationController
    def admin
        roles = Role.select(:id, :role_type).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: roles
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        role = Role.find(params[:id])
        status = 400
        status = 200 if role.present? && role.destroy

        render json: {}, status: status
    end
end
