class UsersController < ApplicationController
    # respond_to :html, :json, :pdf
    before_action :authenticate_user!, except: [:download]

    def my_account
        user = User.select(:id, :name, :nickname, :email, :image).where(id: current_user.id).first
        user_role = UserRole.where(user_id: current_user.id).order(role_id: :desc).first
        role = Role.select(:id, :name).where(id: user_role.role_id)

        render json: {
            data: {
                user: user,
                role: role
            }
        }, status: 200
    end

    def my_tickets
        sql_query = "SELECT su.id, m.name AS movie_name, t.name AS theatre_name, u.email AS user_email, su.row_number, su.seat_number
            FROM showtime_users su
                LEFT JOIN showtimes s ON su.showtime_id = s.id
                LEFT JOIN movies m ON s.movie_id = m.id
                LEFT JOIN theatres t ON s.theatre_id = t.id
                LEFT JOIN users u ON su.user_id = u.id
            WHERE su.user_id = :current_user
            ORDER BY su.created_at DESC
            LIMIT 6
            OFFSET :offset"
        
        sql_params = {offset: (params[:page].to_i-1)*5, current_user: current_user.id}
        showtimes = ShowtimeUser.find_by_sql([sql_query, sql_params])

        render json: {
            data: {
                tickets: showtimes
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

    def download
        su = ShowtimeUser.find(params[:id])
        st = Showtime.find(su.showtime_id)
        theatre = Theatre.find(st.theatre_id)
        movie = Movie.find(st.movie_id)
        user = User.find(su.user_id)
        html = "
        <html>
        <head>
            <style>
            .ticket-list .panel-heading {
                background-color:#F4F8F9;
                border-bottom: none;
            }
            .ticket-list .panel-body {
                background-color:#F4F8F9;
            }
            .ticket-list .table-head{
                border: none;  
            }
            </style>
            <link href='http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css' rel='stylesheet' id='bootstrap-css'>
            <!------ Include the above in your HEAD tag ---------->
        </head>
        <body>
        <div class='container'>
            <div class='row'>
                <div class='col-md-12'>
                    <div class='panel panel-default ticket-list'>
                      <div class='panel-heading'>
                        <h3 class='panel-title text-center'>Cinemapp Movie Reservation</h3>
                      </div>
                      <div class='panel-body'>
                          <table class='table'>
                            <thead class='table-head'>
                              <tr class='table-head'>
                                <th>Movie name</th>
                                <th>Movie date</th>
                                <th>Movie time</th>
                                <th>Theatre</th>
                                <th>Row/Seat</th>
                                <th>Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>movie_name</td>
                                <td>movie_date</td>
                                <td>movie_time</td>
                                <td>theatre_name</td>
                                <td>row_seat</td>
                                <td>user_name</td>
                              </tr>
                            </tbody>
                          </table>    	
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>"

        html.gsub!(/movie_name/, movie.name)
        html.gsub!(/movie_date/, st.projection_date.strftime("%F"))
        html.gsub!(/movie_time/, st.projection_time.strftime("%T"))
        html.gsub!(/theatre_name/, theatre.name)
        html.gsub!(/user_name/, user.name.presence || 'N/A')
        html.gsub!(/row_seat/, "#{su.row_number}/#{su.seat_number}")

        kit = PDFKit.new(html, {orientation: 'Landscape'})
        send_data(kit.to_pdf, type: 'application/pdf', disposition: 'attachment;filename=cinemapp_reservation.pdf')
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
