
class Api::V1::LinksController < Api::ApiController

  respond_to :json

  def create
    link = Link.create(link_params)
    User.find(session[:current_user]).links << link

    respond_with :api, :v1, link
  end

  def update
    link = Link.find(params[:id])
    if params[:read_status] != nil
      link.update_attributes(read_status: params[:read_status].to_s)
    else
      link.update_attributes(link_params)
    end
      respond_with :api, :v1, link
  end

  def index
    respond_with :api, :v1, User.find(session[:current_user]).links.all
  end

  private

  def link_params
    params.permit(:url_link,
                  :title,
                  :read_status)
  end

end
