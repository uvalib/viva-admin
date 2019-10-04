class ApplicationController < ActionController::Base
  #force user to redirect to the login page if they are not logged in
  before_action :authenticate_user

  protect_from_forgery with: :exception
  
  def authenticate_user
    org_id = request.env
    if Rails.env.development?
    end
    @org = '23' #replace this with request.env
  
  end


end
