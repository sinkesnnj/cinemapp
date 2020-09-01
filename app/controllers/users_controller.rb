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
        users = User.select(:id, :name, :email, :nickname).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

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

    def create
        user = User.new(params.permit!.except(:controller, :action))
        status = user.save ? 200 : 400


        render json: {}, status: status
    end

    def edit
        user = User.find(params[:id])

        render json: {
            data: {
                model: user
            }
        }, status: 200
    end

    def update
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
