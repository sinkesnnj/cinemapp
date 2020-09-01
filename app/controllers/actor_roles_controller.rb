class ActorRolesController < ApplicationController
    def admin
        sql_query = "SELECT ar.id, a.name AS actor_name, r.role_type AS role_type
            FROM actor_roles ar
                JOIN actors a ON ar.actor_id = a.id
                JOIN roles r ON ar.role_id = r.id
            ORDER BY ar.id DESC
            LIMIT 11
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*10}
        actor_roles = ActorRole.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                items: actor_roles
            }
        }, status: 200
    end

    def destroy
        # TODO: Authorization
        actor_role = ActorRole.find(params[:id])
        status = 400
        status = 200 if actor_role.present? && actor_role.destroy

        render json: {}, status: status
    end
end
