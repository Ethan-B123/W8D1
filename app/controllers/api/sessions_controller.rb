class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(user_params)
    if !@user
      @errors = {
        messages: ["invalid username or password"]
      }
      render json: @errors, status: 422
    else
      session[:session_token] = @user.session_token
      render :show
    end
  end

  def destroy
    if current_user
      current_user.reset_session
      session[:session_token] = nil
      render json: {}
    else
      @errors = {
        messages: ["Not logged in"]
      }
      render json: @errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
