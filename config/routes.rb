Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get '/users/my_account', to: 'users#my_account'

  get '/news/index', to: 'news#index'
  get '/news/carousel', to: 'news#carousel'

  get '/movies/index', to: 'movies#index'
  get '/movies/dashboard', to: 'movies#dashboard'

  get '/theatres/index', to: 'theatres#index'
end
