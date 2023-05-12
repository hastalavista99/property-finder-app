Rails.application.routes.draw do
  get 'dashboard/index'
  get 'dashboard/properties'
  get 'dashboard/reports'
  resources :properties

  devise_scope :account do
    get 'accounts/sign_out' => 'devise/sessions#destroy'
  end
  devise_for :accounts


  #get 'home/index'

  root to: 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
