class VivasController < ApplicationController
  before_action :set_viva, only: [:show, :edit, :update, :destroy]

  # GET /vivas
  # GET /vivas.json
  def index
   # @vivas = Viva.all
    @vivas = Viva.find_by(id: current_user.Org)
  end

  # GET /vivas/1
  # GET /vivas/1.json
  def show
  end

  # GET /vivas/new
  def new
    @viva = Viva.new
  end

  # GET /vivas/1/edit
  def edit
  end

  # POST /vivas
  # POST /vivas.json
  def create
    @viva = Viva.new(viva_params)

    respond_to do |format|
      if @viva.save
        format.html { redirect_to @viva, notice: 'Viva was successfully created.' }
        format.json { render :show, status: :created, location: @viva }
      else
        format.html { render :new }
        format.json { render json: @viva.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vivas/1
  # PATCH/PUT /vivas/1.json
  def update
    respond_to do |format|
      if @viva.update(viva_params)
        format.html { redirect_to @viva, notice: 'Viva was successfully updated.' }
        format.json { render :show, status: :ok, location: @viva }
      else
        format.html { render :edit }
        format.json { render json: @viva.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vivas/1
  # DELETE /vivas/1.json
  def destroy
    @viva.destroy
    respond_to do |format|
      format.html { redirect_to vivas_url, notice: 'Viva was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_viva
      @viva = Viva.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def viva_params
      params.require(:viva).permit(:institution)
    end
end
