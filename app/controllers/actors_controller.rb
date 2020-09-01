class ActorsController < ApplicationController
    def admin
        actors = Actor.order(created_at: :desc).offset((params[:page].to_i-1)*10).limit(11)

        render json: {
            data: {
                actors: actors
            }
        }, status: 200
    end
end
