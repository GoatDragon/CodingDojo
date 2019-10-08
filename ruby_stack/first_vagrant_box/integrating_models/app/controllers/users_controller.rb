class UsersController < ApplicationController
  def root
    render json: User.all
  end

  def create
    User.create(name:params[:name])
    redirect_to "/users"
  end

  def total
    render text: User.all.count
  end

  def show
    render json: User.find(params[:id])
  end

  def edit
    @username = User.find(params[:id]).name
  end

  def edit_submit
    User.find(params[:id]).update(name:params[:name])
    redirect_to "/users/#{params[:id]}"
  end

  def delete
    User.find(params[:id]).destroy
    redirect_to "/users/"
  end
end
