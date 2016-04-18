class Api::V1::UsersController < Api::ApiController

  respond_to :json

  def create
    user = User.create(user_params)

    if user.save
      session[:current_user] = user.id
      respond_with :api, :v1, user
    end
  end


  private

  def user_params
    params.permit(:username,
                  :password,
                  :email)
  end
end
