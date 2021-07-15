class CocktailsController < ApplicationController

  # GET /cocktails
  def index
    cocktails = Cocktail.all

    render json: CocktailSerializer.new(cocktails).to_serialized_json
  end

  # GET /cocktails/1
  def show
    cocktail = Cocktail.find_by(id: params[:id])
    if cocktail
      render json: CocktailSerializer.new(cocktail).to_serialized_json
    else
      render json: { message: 'Cocktail not found' }
    end
  end

  # POST /cocktails
  def create
    cocktail = Cocktail.new(cocktail_params)

    if cocktail.save
      render json: CocktailSerializer.new(cocktail).to_serialized_json
    else
      render json: { message: 'There was an error creating this cocktail, please try again' }
    end
  end

  # PATCH/PUT /cocktails/1
  def update
    cocktail = Cocktail.find_by(id: params[:id])
    if cocktail.update(cocktail_params)
      render json: CocktailSerializer.new(cocktail).to_serialized_json
    else
      render json: { message: 'There was an error updating this cocktail, please try again' }
    end
  end

  # DELETE /cocktails/1
  def destroy
    cocktail = Cocktail.find_by(id: params[:id])
    if cocktail
      cocktail.destroy
    else
      render json: { message: 'Cocktail not found' }
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def cocktail_params
      params.require(:cocktail).permit(:name, :glassware, :ice, :image, :origin, :preparation)
    end
end
