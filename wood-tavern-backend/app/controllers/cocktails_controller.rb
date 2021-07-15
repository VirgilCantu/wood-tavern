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
      render json: cocktail, status: :created, location: cocktail
    else
      render json: cocktail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cocktails/1
  def update
    if cocktail.update(cocktail_params)
      render json: cocktail
    else
      render json: cocktail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cocktails/1
  def destroy
    cocktail.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def cocktail_params
      params.require(:cocktail).permit(:name, :glassware, :ice, :image, :origin, :preparation)
    end
end
