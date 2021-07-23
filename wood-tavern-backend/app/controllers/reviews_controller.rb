class ReviewsController < ApplicationController

  # GET /reviews
  def index
    reviews = Review.all

    render json: ObjectSerializer.new(reviews).to_serialized_json
  end

  # GET /reviews/1
  def show
    review = Review.find_by(id: params[:id])
    if review
      render json: ObjectSerializer.new(review).to_serialized_json
    else
      render json: { message: 'Review not found' }
    end
  end

  # POST /reviews
  def create
    review = Review.new(review_params)

    if review.save
      render json: ObjectSerializer.new(review).to_serialized_json
    else
      render json: { message: 'There was an error creating this review, please try again' }
    end
  end

  # PATCH/PUT /reviews/1
  def update
    review = Review.find_by(id: params[:id])
    if review.update(review_params)
      render json: ObjectSerializer.new(review).to_serialized_json
    else
      render json: { message: 'There was an error updating this review, please try again' }
    end
  end

  # DELETE /reviews/1
  def destroy
    review = Review.find_by(id: params[:id])
    if review
      review.destroy
    else
      render json: { message: 'Review not found' }
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:name, :content, :date, :rating)
    end
end
