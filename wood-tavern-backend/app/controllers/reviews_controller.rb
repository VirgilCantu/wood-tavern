class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    reviews = Review.all

    render json: ReviewSerializer.new(reviews).to_serialized_json
  end

  # GET /reviews/1
  def show
    review = Review.find_by(id: params[:id])
    if review
      render json: ReviewSerializer.new(review).to_serialized_json
    else
      render json: { message: 'Review not found' }
    end
  end

  # POST /reviews
  def create
    review = Review.new(review_params)

    if review.save
      render json: ReviewSerializer.new(review).to_serialized_json
    else
      render json: { message: 'There was an error creating this review, please try again' }
    end
  end

  # PATCH/PUT /reviews/1
  def update
    review = Review.find_by(id: params[:id])
    if review.update(review_params)
      render json: ReviewSerializer.new(review).to_serialized_json
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
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:name, :content, :date)
    end
end
