Rails.application.routes.draw do

  namespace :api do

    namespace :v1, defaults: {format: :json} do

      resources :sessions, only: [:create, :show, :destroy]
      resources :users, only: [:create, :show]
      resources :links, only: [:create, :show, :update]
    end
  end
end
