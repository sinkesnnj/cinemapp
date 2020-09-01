class MovieActorsController < ApplicationController
    def admin
        sql_query = "SELECT ma.id, m.name AS movie_name, a.name AS actor_name, ma.character_namem AS character_name
            FROM movie_actors ma
                JOIN movies m ON ma.movie_id = m.id
                JOIN actors a ON ma.actor_id = a.id
            ORDER BY ma.id DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        movie_actors = MovieActor.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: movie_actors
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        movie_actor = MovieActor.find(params[:id])
        status = 400
        status = 200 if movie_actor.present? && movie_actor.destroy

        render json: {}, status: status
    end

    def create
        if Movie.find(params[:movie_id]).blank? || Actor.find(params[:actor_id]).blank?
            status = 400
        else
            movie_actor = MovieActor.new(params.permit!.except(:controller, :action))
            status = movie_actor.save ? 200 : 400
        end

        render json: {}, status: status
    end

    def edit
        movie_actor = MovieActor.find(params[:id])

        render json: {
            data: {
                model: movie_actor
            }
        }, status: 200
    end

    def update
        movie_actor = MovieActor.find(params[:id])
        if movie_actor.present?
            movie_actor.movie_id = params[:movie_id] if params.key?(:movie_id)
            movie_actor.actor_id = params[:actor_id] if params.key?(:actor_id)
            movie_actor.character_namem = params[:character_namem] if params.key?(:character_namem)

            status = movie_actor.save ? 200 : 400
        else
            status = 400
        end

        render json: {}, status: status
    end
end
