class School < ActiveRecord::Base
  has_many :ratings
  has_many :features
  has_many :badges
end
