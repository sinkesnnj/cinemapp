class ActorsController < ApplicationController
    before_action :authenticate_user!, only: [:admin, :destroy, :create, :edit, :update]

    def admin
        return unless is_admin?

        actors = Actor.select(:id, :name, :surname).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: actors
            }
        }, status: 200
    end

    def destroy
        return unless is_admin?

        actor = Actor.find(params[:id])
        status = 400
        status = 200 if actor.present? && actor.destroy

        render json: {}, status: status
    end

    def create
        return unless is_admin?

        actor = Actor.new(params.permit!.except(:controller, :action))
        status = actor.save ? 200 : 400


        render json: {}, status: status
    end

    def edit
        return unless is_admin?

        actor = Actor.find(params[:id])

        render json: {
            data: {
                model: actor
            }
        }, status: 200
    end

    def update
        return unless is_admin?
        
        actor = Actor.find(params[:id])
        if actor.present?
            actor.name = params[:name] if params.key?(:name)
            actor.surname = params[:surname] if params.key?(:surname)

            status = actor.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
