class HealthcheckController < ApplicationController
def index
  response = 'OK'.to_json
  render json: response, :status =>  200
end
end