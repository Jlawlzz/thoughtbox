class Api::V1::SessionsController < Api::ApiController

  respond_to :json

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      session[:current_user] = user
      respond_with :api, :v1, user
    end
  end

  def destroy
    user = User.find(params[:id])
    session.clear
    respond_with :api, :v1, user
  end

end
