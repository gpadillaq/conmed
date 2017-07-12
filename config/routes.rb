Rails.application.routes.draw do
  devise_for :users, skip: :registrations

  resources :clinic
  resources :pacients

  root 'dashboard#main'
end
