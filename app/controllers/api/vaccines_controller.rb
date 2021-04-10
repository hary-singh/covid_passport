class Api::VaccinesController < ApplicationController
  before_action :set_destination
  def index
    render json: @destination.vaccines
  end

  def create
    @vaccine = @destination.vaccines.new(vaccine_params)
    if @vaccine.save
      render json: @vaccine
    else
      render json: { errors: @vaccine.errors}, status: :unprocessable_entity
    end
  end

  def update
    @vaccine = @destination.vaccines.find(params[:id])
    if @vaccine.update(vaccine_params)
      render json: @destination
    else
      render json: { errors: @vaccine.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @vaccine = @destination.vaccines.find(params[:id])
    @vaccine.destroy
    render json: { message: ' Vaccine has been Deleted!'}
  end

  private
    def vaccine_params
      params.require(:vaccine).permit(:name, :desc, :make)
    end

    def set_destination
      @destination = current_user.destinations.find(params[:destination_id])
    end
end
