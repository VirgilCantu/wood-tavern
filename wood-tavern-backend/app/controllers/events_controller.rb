class EventsController < ApplicationController

  # GET /events
  def index
    events = Event.all

    render json: ObjectSerializer.new(events).to_serialized_json
  end

  # GET /events/1
  def show
    event = Event.find_by(id: params[:id])
    if event
      render json: ObjectSerializer.new(event).to_serialized_json
    else
      render json: { message: 'Event not found' }
    end
  end

  # POST /events
  def create
    event = Event.new(event_params)

    if event.save
      render json: ObjectSerializer.new(event).to_serialized_json
    else
      render json: { message: 'There was an error creating this event, please try again' }
    end
  end

  # PATCH/PUT /events/1
  def update
    event = Event.find_by(id: params[:id])
    if event.update(event_params)
      render json: ObjectSerializer.new(event).to_serialized_json
    else
      render json: { message: 'There was an error updating this event, please try again' }
    end
  end

  # DELETE /events/1
  def destroy
    event = Event.find_by(id: params[:id])
    if event
      event.destroy
    else
      render json: { message: 'Event not found' }
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:name, :date, :time, :description, :image)
    end
end
