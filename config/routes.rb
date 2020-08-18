Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
#   devise_for :users, controllers: {
#     sessions: 'users/sessions'
    
#   }
end

# Rails.application.routes.draw do
# mount_devise_token_auth_for 'User', at: 'auth'
#   devise_scope :user do
#     get '/users/my_account', to: 'users/sessions#my_account'
#   end
# end
