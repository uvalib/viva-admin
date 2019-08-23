Rails.application.routes.draw do
  get 'admin/dashboard'
  resources :vivas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :users, :controllers => { registrations: 'users/registrations' }

  # health check and version endpoints
  resources :healthcheck, only: [ :index ]
  resources :version, only: [ :index ]

  #root to: "admin#dashboard"
  root to: "vivas#index"
end
