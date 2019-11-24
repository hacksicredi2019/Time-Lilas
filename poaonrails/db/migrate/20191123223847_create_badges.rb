class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :name
      t.text :description
      t.string :category
      t.string :icon
      t.references :school, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
