class UsersController < ApplicationController
    before_action :authenticate_user!

    def my_account
        render json: {
            data: {
                message: "Welcome #{current_user.name}",
                user: current_user
            }
        }, status: 200
    end

    def admin
        users = User.select(:id, :name, :email, :last_sign_in_at).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: users
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        user = User.find(params[:id])
        status = 400
        status = 200 if users.present? && users.destroy

        render json: {}, status: status
    end
end
