class EventSerializer

    def initialize(event_object)
        @event = event_object
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @event.to_json(options)
    end
end