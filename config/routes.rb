Rails.application.routes.draw do
  devise_for :accounts
  resources :posts
  resources :properties

  get "/blog" => "posts#latest", as: :blog

  #admin routes
  get  "/accounts" => 'admin#accounts', as: :accounts


  get  "/dashboard" => 'dashboard#index', as: :dashboard
  get  "/profile/:id" => 'dashboard#profile', as: :profile
  get 'dashboard/properties'
  get 'dashboard/reports'

  get 'search' => 'properties#search'


  devise_scope :account do
    get 'accounts/sign_out' => 'devise/sessions#destroy'
  end


  post "agent/message" => "properties#email_agent", as: :email_agent

  #get 'home/index'

  root to: 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
