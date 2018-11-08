Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'desks#index'
  resources :desks, only: [:create, :index, :show], param: :token

  mount ActionCable.server => '/cable'
end
