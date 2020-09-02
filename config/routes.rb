Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get '/users/my_account', to: 'users#my_account'
  put '/users/my_account', to: 'users#update_my_account'

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
  post '/admin/actors/create', to: 'actors#create'
  get '/admin/actors/:id', to: 'actors#edit'
  put '/admin/actors/:id', to: 'actors#update'
  delete '/admin/actors/:id', to: 'actors#destroy'

  get '/admin/categories', to: 'categories#admin'
  post '/admin/categories/create', to: 'categories#create'
  get '/admin/categories/:id', to: 'categories#edit'
  put '/admin/categories/:id', to: 'categories#update'
  delete '/admin/categories/:id', to: 'categories#destroy'

  get '/admin/genres', to: 'genres#admin'
  post '/admin/genres/create', to: 'genres#create'
  get '/admin/genres/:id', to: 'genres#edit'
  put '/admin/genres/:id', to: 'genres#update'
  delete '/admin/genres/:id', to: 'genres#destroy'

  get '/admin/news', to: 'news#admin'
  post '/admin/news/create', to: 'news#create'
  get '/admin/news/:id', to: 'news#edit'
  put '/admin/news/:id', to: 'news#update'
  delete '/admin/news/:id', to: 'news#destroy'

  get '/admin/users', to: 'users#admin'
  post '/admin/users/create', to: 'users#create'
  get '/admin/users/:id', to: 'users#edit'
  put '/admin/users/:id', to: 'users#update'
  delete '/admin/users/:id', to: 'users#destroy'

  get '/admin/theatres', to: 'theatres#admin'
  post '/admin/theatres/create', to: 'theatres#create'
  get '/admin/theatres/:id', to: 'theatres#edit'
  put '/admin/theatres/:id', to: 'theatres#update'
  delete '/admin/theatres/:id', to: 'theatres#destroy'

  get '/admin/showtimes', to: 'showtimes#admin'
  post '/admin/showtimes/create', to: 'showtimes#create'
  get '/admin/showtimes/:id', to: 'showtimes#edit'
  put '/admin/showtimes/:id', to: 'showtimes#update'
  delete '/admin/showtimes/:id', to: 'showtimes#destroy'

  get '/admin/showtime_users', to: 'showtime_users#admin'
  post '/admin/showtime_users/create', to: 'showtime_users#create'
  get '/admin/showtime_users/:id', to: 'showtime_users#edit'
  put '/admin/showtime_users/:id', to: 'showtime_users#update'
  delete '/admin/showtime_users/:id', to: 'showtime_users#destroy'

  get '/admin/roles', to: 'roles#admin'
  post '/admin/roles/create', to: 'roles#create'
  get '/admin/roles/:id', to: 'roles#edit'
  put '/admin/roles/:id', to: 'roles#update'
  delete '/admin/roles/:id', to: 'roles#destroy'

  get '/admin/news_categories', to: 'news_categories#admin'
  post '/admin/news_categories/create', to: 'news_categories#create'
  get '/admin/news_categories/:id', to: 'news_categories#edit'
  put '/admin/news_categories/:id', to: 'news_categories#update'
  delete '/admin/news_categories/:id', to: 'news_categories#destroy'

  get '/admin/movie_actors', to: 'movie_actors#admin'
  post '/admin/movie_actors/create', to: 'movie_actors#create'
  get '/admin/movie_actors/:id', to: 'movie_actors#edit'
  put '/admin/movie_actors/:id', to: 'movie_actors#update'
  delete '/admin/movie_actors/:id', to: 'movie_actors#destroy'

  get '/admin/actor_roles', to: 'actor_roles#admin'
  post '/admin/actor_roles/create', to: 'actor_roles#create'
  get '/admin/actor_roles/:id', to: 'actor_roles#edit'
  put '/admin/actor_roles/:id', to: 'actor_roles#update'
  delete '/admin/actor_roles/:id', to: 'actor_roles#destroy'
end
