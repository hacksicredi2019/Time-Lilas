class AddCategoryToRating < ActiveRecord::Migration
  def change
    add_column :ratings, :category, :string
  end
end
