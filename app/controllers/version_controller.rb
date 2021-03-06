class VersionController < ApplicationController

  #skip_before_filter :require_auth
  skip_before_action :authenticate_user!, raise: false

  # the response
  class VersionResponse
    attr_accessor :version
    def initialize( version )
      @version = version
    end
  end

  # # GET /version
  # # GET /version.json

  def index
    response = VersionResponse.new( BUILD_VERSION )
    render json: response, :status => 200
  end

end