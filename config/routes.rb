Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :posts, only: :index

  root "home#index"
  get '*path', to: 'home#index', via: :all
  # Defines the root path route ("/")
  # root "articles#index"
end