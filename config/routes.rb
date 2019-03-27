Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # health check and version endpoints
  resources :healthcheck, only: [ :index ]
  resources :version, only: [ :index ]

end
