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
      render json: review, status: :created, location: review
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if review.update(review_params)
      render json: review
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    review.destroy
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
