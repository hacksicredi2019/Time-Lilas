class CreateStatistics < ActiveRecord::Migration
  def change
    create_table :statistics do |t|
      t.string :danger_district
      t.float :ratings
      t.float :security
      t.float :accessibility
      t.float :teaching
      t.float :infrastruc
      t.references :school, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
