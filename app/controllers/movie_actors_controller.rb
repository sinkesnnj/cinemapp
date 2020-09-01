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
end
