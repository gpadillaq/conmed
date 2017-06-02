Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'pacient/index'

  resources :clinic
  resources :pacient

  root 'dashboard#main'
end
