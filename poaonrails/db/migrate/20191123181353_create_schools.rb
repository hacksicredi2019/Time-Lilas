class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :name
      t.integer :vacancy
      t.float :rating
      t.string :category

      t.timestamps null: false
    end
  end
end
