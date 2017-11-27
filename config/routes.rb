Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  namespace :api do
    resources :conversations, only: [:create, :index]
  end
end
