Rails.application.routes.draw do
  get 'times/restart'
  get 'times' => "times#times"
  root "say#what"
  get 'say/hello'
  get 'say/hello/michael' => "say#michael"
  get 'say/hello/:name' => "say#name"
  get "hello" => "hello#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
