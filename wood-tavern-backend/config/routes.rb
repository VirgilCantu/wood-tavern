Rails.application.routes.draw do
  resources :reviews
  resources :events
  resources :beers
  resources :cocktails
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
