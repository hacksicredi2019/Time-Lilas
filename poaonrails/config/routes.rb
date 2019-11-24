Rails.application.routes.draw do
  resources :statistics
  resources :badges
  resources :features
  resources :ratings
  resources :users
  resources :schools
  get '/api/poaonrails/schools/:name', to: 'schools#list', as: 'schools_list'
  get '/api/poaonrails/ratings/:school_id', to: 'ratings#list', as: 'ratings_list_by_school'
  post '/api/poaonrails/ratings/create/new', to: 'ratings#register', as: 'create_rating'
  post '/api/poaonrails/users/create/new', to: 'users#register', as: 'create_user'
  post '/api/poaonrails/users/login', to: 'users#login', as: 'login_user'
  get '/api/poaonrails/features/:school_id', to: 'features#list', as: 'feature_list'
  get '/api/poaonrails/badges/:school_id', to: 'badges#list', as: 'badge_list'
  get '/api/poaonrails/school/:school_id', to: 'schools#find', as: 'find_school_by_id'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
