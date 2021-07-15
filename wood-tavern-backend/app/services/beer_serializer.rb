class BeerSerializer

    def initialize(beer_object)
        @beer = beer_object
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @beer.to_json(options)
    end
end