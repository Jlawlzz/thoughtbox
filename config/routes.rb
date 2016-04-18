Rails.application.routes.draw do

  namespace :api do

    namespace :v1, defaults: {format: :json} do

      resources :sessions, only: [:create, :show]
      resources :users, only: [:show]

    end
  end
end
