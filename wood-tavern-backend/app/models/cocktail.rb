class Cocktail < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, presence: true
    validates :image, presence: true
    validates :description, presence: true
end
