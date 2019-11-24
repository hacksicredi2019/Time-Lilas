class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /ratings
  # GET /ratings.json
  def index
    @ratings = Rating.all
  end

  def list
    school_id = params[:school_id]
    @school = School.find(school_id)
    @ratings = @school.ratings
    render :json => @ratings
  end

  def register
    rating_params = extract_rating_params()
    rating = Rating.create(rating_params)
    rating.save
    render :json => rating
  end

  def extract_rating_params
    user_id = params[:user_id]
    school_id = params[:school_id]
    pros = params[:pros]
    cons = params[:cons]
    rating = params[:rating]
    category = params[:category]
    return {user_id: user_id, school_id: school_id, pros: pros, cons: cons, rating: rating, category: category}
  end

  # GET /ratings/1
  # GET /ratings/1.json
  def show
  end

  # GET /ratings/new
  def new
    @rating = Rating.new
  end

  # GET /ratings/1/edit
  def edit
  end

  # POST /ratings
  # POST /ratings.json
  def create
    @rating = Rating.new(rating_params)

    respond_to do |format|
      if @rating.save
        format.html { redirect_to @rating, notice: 'Rating was successfully created.' }
        format.json { render :show, status: :created, location: @rating }
      else
        format.html { render :new }
        format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ratings/1
  # PATCH/PUT /ratings/1.json
  def update
    respond_to do |format|
      if @rating.update(rating_params)
        format.html { redirect_to @rating, notice: 'Rating was successfully updated.' }
        format.json { render :show, status: :ok, location: @rating }
      else
        format.html { render :edit }
        format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ratings/1
  # DELETE /ratings/1.json
  def destroy
    @rating.destroy
    respond_to do |format|
      format.html { redirect_to ratings_url, notice: 'Rating was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rating_params
      params.require(:rating).permit(:user_id, :school_id, :pros, :cons, :rating, :category)
    end
end
