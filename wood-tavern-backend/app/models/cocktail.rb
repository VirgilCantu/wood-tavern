class Cocktail < ApplicationRecord
    has_many :cocktail_ingredients
    has_many :ingredients, through: :cocktail_ingredients

    validates :name, presence: true, uniqueness: true
    validates :price, presence: true
    validates :image, presence: true
    validates :description, presence: true
end
