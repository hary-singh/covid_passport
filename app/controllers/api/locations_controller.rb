class Api::LocationsController < ApplicationController
  def index
    render json: vaccines.locations
  end

  def create
    @location = vaccines.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: { errors: @location.errors}, status: :unprocessable_entity
    end
  end

  def update
    @locaation = vaccines.locations.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: { errors: @location.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @destination = current_user.locations.find(params[:id])
    @l.destroy
    render json: { message: ' Destination Deleted!'}
  end

  private
    def destination_params
      params.require(:destination).permit(:name, :notes, :reqs)
    end
end
