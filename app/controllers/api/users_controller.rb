class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if !@user.save
      @errors = {
        messages: @user.errors.full_messages,
        status: 422
      }
      render json: @errors
    else
      session[:session_token] = @user.session_token
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
