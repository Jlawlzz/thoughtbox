require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html, :json

  protect_from_forgery with: :exception

  helper_method :current_user
  before_action :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
