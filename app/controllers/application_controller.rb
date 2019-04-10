class ApplicationController < ActionController::Base
  #force user to redirect to the login page if they are not logged in
  before_action :authenticate_user!
end
