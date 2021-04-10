class Api::DestinationsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Destination.all
  end

  def create
    @destination = current_user.destinations.new(destination_params)
    if @destination.save
      render json: @destination
    else
      render json: { errors: @destination.errors}, status: :unprocessable_entity
    end
  end

  def update
    @destination = current_user.destinations.find(params[:id])
    if @destination.update(destination_params)
      render json: @destination
    else
      render json: { errors: @destination.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @destination = current_user.destinations.find(params[:id])
    @destination.destroy
    render json: { message: ' Destination Deleted!'}
  end

  private
    def destination_params
      params.require(:destination).permit(:name, :notes, :reqs)
    end

end
