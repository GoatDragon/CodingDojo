Rails.application.routes.draw do
  resources :dojos
  get "/dojos/:dojo_id/students" => "students#index", as: "students"
  get "/dojos/:dojo_id/students/new" => "students#new"
  post "/dojos/:dojo_id/students" => "students#create"
  get "/dojos/:dojo_id/students/:id" => "students#show", as: "student"
  get "/dojos/:dojo_id/students/:id/edit" => "students#edit", as: "edit_student"
  patch "/dojos/:dojo_id/students/:id" => "students#update"
  delete "/dojos/:dojo_id/students/:id" => "students#destroy", as: "user_delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
