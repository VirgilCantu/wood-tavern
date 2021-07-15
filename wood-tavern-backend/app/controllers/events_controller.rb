class EventsController < ApplicationController

  # GET /events
  def index
    events = Event.all

    render json: EventSerializer.new(events).to_serialized_json
  end

  # GET /events/1
  def show
    event = Event.find_by(id: params[:id])
    if event
      render json: EventSerializer.new(event).to_serialized_json
    else
      render json: { message: 'Event not found' }
    end
  end

  # POST /events
  def create
    event = Event.new(event_params)

    if event.save
      render json: event, status: :created, location: event
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if event.update(event_params)
      render json: event
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    event.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:name, :time, :date, :description)
    end
end
