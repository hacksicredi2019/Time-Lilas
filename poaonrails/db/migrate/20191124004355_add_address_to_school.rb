class AddAddressToSchool < ActiveRecord::Migration
  def change
    add_column :schools, :address, :string
    add_column :schools, :address_number, :integer
    add_column :schools, :address_complement, :string
    add_column :schools, :address_district, :string
    add_column :schools, :address_cep, :integer
    add_column :schools, :phone, :string
    add_column :schools, :public_phone, :string
    add_column :schools, :fax, :string
  end
end
