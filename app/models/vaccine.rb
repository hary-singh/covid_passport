class Vaccine < ApplicationRecord
  belongs_to :destinations, dependent: :destroy
  has_many :locations
end
