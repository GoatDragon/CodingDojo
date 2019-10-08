Rails.application.routes.draw do
  get 'users' => 'users#root'

  post 'users' => 'users#create'

  get 'users/new'

  get 'users/total'

  get 'users/:id' => 'users#show'

  post 'users/:id' => 'users#edit_submit'
  
  get 'users/:id/edit' => 'users#edit'

  get 'users/:id/delete' => 'users#delete'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
