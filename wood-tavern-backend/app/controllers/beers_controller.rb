class BeersController < ApplicationController

  # GET /beers
  def index
    beers = Beer.all

    render json: BeerSerializer.new(beers).to_serialized_json
  end

  # GET /beers/1
  def show
    beer = Beer.find_by(id: params[:id])
    if beer
      render json: BeerSerializer.new(beer).to_serialized_json
    else
      render json: { message: 'Beer not found' }
    end
  end

  # POST /beers
  def create
    beer = Beer.new(beer_params)

    if beer.save
      render json: BeerSerializer.new(beer).to_serialized_json
    else
      render json: { message: 'There was an error creating this beer, please try again' }
    end
  end

  # PATCH/PUT /beers/1
  def update
    beer = Beer.find_by(id: params[:id])
    if beer.update(beer_params)
      render json: beer
    else
      render json: { message: 'There was an error updating this beer, please try again' }
    end
  end

  # DELETE /beers/1
  def destroy
    beer.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def beer_params
      params.require(:beer).permit(:name, :style, :abv, :brewery, :location)
    end
end
