class Badge < ActiveRecord::Base
  belongs_to :school, :foreign_key => :cod
end
