class HealthcheckController < ApplicationController
  skip_before_action :authenticate_user!, raise: false

def index
  response = 'OK'.to_json
  render json: response, :status =>  200
end
end