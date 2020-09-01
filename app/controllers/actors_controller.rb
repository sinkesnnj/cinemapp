class ActorsController < ApplicationController
    def admin
        actors = Actor.select(:id, :name, :surname).order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                items: actors
            }
        }, status: 200
    end
end
