class CocktailSerializer

    def initialize(cocktail_object)
        @cocktail = cocktail_object
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @cocktail.to_json(options)
    end
end