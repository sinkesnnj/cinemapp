class UsersController < ApplicationController
    before_action :authenticate_user!

    def my_account
        user = User.select(:id, :name, :nickname, :email, :image).where(id: current_user.id).first
        user_permission = UserPermission.where(user_id: current_user.id).order(permission_id: :desc).first
        permission = Permission.select(:id, :name).where(id: user_permission.permission_id)

        render json: {
            data: {
                user: user,
                permission: permission
            }
        }, status: 200
    end

    def update_my_account
        user = User.find(current_user.id)
        if user.present?
            user.name = params[:name] if params.key?(:name)
            user.email = params[:email] if params.key?(:email)
            user.nickname = params[:nickname] if params.key?(:nickname)
            user.image = params[:image] if params.key?(:image)

            status = user.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end

    def admin
        return unless is_admin?

        users = User.select(:id, :name, :email, :nickname).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: users
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        user = User.find(params[:id])
        status = 400
        status = 200 if users.present? && users.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        user = User.new(params.permit!.except(:controller, :action))
        status = user.save ? 200 : 400


        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        user = User.find(params[:id])

        render json: {
            data: {
                model: user
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        user = User.find(params[:id])
        if user.present?
            user.name = params[:name] if params.key?(:name)
            user.email = params[:email] if params.key?(:email)
            user.nickname = params[:nickname] if params.key?(:nickname)

            status = user.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
