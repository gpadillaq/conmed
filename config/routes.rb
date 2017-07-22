Rails.application.routes.draw do
  devise_for :users, skip: :registrations

  resources :clinic
  resources :pacients
  resources :appointments

  root 'dashboard#main'
end
