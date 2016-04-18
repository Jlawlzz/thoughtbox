
class Api::V1::LinksController < Api::ApiController

  respond_to :json

  def create
    link = Link.create(link_params)

    respond_with :api, :v1, link
  end

  def update
    link = Link.find(params[:id])
    link.update_attributes(link_params)

    respond_with :api, :v1, link
  end

  private

  def link_params
    params.permit(:url_link,
                  :title)
  end

end
