Rails.application.routes.draw do
  devise_for :users, skip: :registrations

  resources :clinic
  resources :pacients
  resources :appointments
  resources :medical_consultations

  root 'dashboard#main'
end
