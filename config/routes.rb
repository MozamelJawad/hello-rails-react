Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random'
  end
  get 'root/index'

  root 'root#index'
end
