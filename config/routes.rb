Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get '/users/my_account', to: 'users#my_account'

  get '/news/index', to: 'news#index'
  get '/news/carousel', to: 'news#carousel'
  get '/news/categories', to: 'news#categories'
  get '/news/show/:id', to: 'news#show'

  get '/movies/index', to: 'movies#index'
  get '/movies/dashboard', to: 'movies#dashboard'
  get '/movies/show/:id', to: 'movies#show'

  get '/theatres/index', to: 'theatres#index'

  get '/admin/movies', to: 'movies#admin'
  post '/admin/movies/create', to: 'movies#create'
  get '/admin/movies/:id', to: 'movies#edit'
  put '/admin/movies/:id', to: 'movies#update'
  delete '/admin/movies/:id', to: 'movies#destroy'
 
  get '/admin/actors', to: 'actors#admin'

  get '/admin/categories', to: 'categories#admin'
  delete '/admin/categorie/:id', to: 'categories#destroy'

  get '/admin/genres', to: 'genres#admin'
  delete '/admin/genres/:id', to: 'genres#destroy'

  get '/admin/news', to: 'news#admin'
  delete '/admin/news/:id', to: 'news#destroy'

  get '/admin/users', to: 'users#admin'
  delete '/admin/users/:id', to: 'users#destroy'

  get '/admin/theatres', to: 'theatres#admin'
  delete '/admin/theatres/:id', to: 'theatres#destroy'

  get '/admin/showtimes', to: 'showtimes#admin'
  delete '/admin/showtimes/:id', to: 'showtimes#destroy'

  get '/admin/showtime_users', to: 'showtime_users#admin'
  delete '/admin/showtime_users/:id', to: 'showtime_users#destroy'

  get '/admin/roles', to: 'roles#admin'
  delete '/admin/roles/:id', to: 'roles#destroy'

  get '/admin/news_categories', to: 'news_categories#admin'
  delete '/admin/news_categories/:id', to: 'news_categories#destroy'

  get '/admin/movie_actors', to: 'movie_actors#admin'
  delete '/admin/movie_actors/:id', to: 'movie_actors#destroy'

  get '/admin/actor_roles', to: 'actor_roles#admin'
  delete '/admin/actor_roles/:id', to: 'actor_roles#destroy'
end
