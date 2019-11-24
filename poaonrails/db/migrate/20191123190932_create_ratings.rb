class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.references :user, index: true, foreign_key: true
      t.references :school, index: true, foreign_key: true
      t.text :pros
      t.text :cons
      t.float :rating

      t.timestamps null: false
    end
  end
end
