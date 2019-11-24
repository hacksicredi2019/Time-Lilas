class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :name
      t.text :description
      t.string :category
      t.float :rating
      t.references :school, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
