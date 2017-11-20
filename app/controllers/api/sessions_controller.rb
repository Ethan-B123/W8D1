class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(user_params)
    if !@user
      @errors = {
        messages: ["invalid username or password"],
        status: 401
      }
      render json: @errors
    else
      session[:session_token] = @user.session_token
      render :show
    end
  end

  def destroy
    current_user.reset_session
    session[:session_token] = null
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
