class AddCodToSchool < ActiveRecord::Migration
  def change
    add_column :schools, :cod, :integer
  end
end
