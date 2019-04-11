class ApplicationController < ActionController::Base
  #force user to redirect to the login page if they are not logged in
  before_action :authenticate_user!

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:Org, :email, :password)}

    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:Org, :email, :password, :current_password)}
  end

end
