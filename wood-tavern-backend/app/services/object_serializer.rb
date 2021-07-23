class ObjectSerializer

    def initialize(object)
        @object = object
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @object.to_json(options)
    end
end