class Cocktail < ApplicationRecord
    has_many :cocktail_ingredients
    has_many :ingredients, through: :cocktail_ingredients

    validates :name, presence: true, uniqueness: true
    validates :glassware, presence: true
    validates :ice, presence: true
    validates :preparation, presence: true
    validates :image, presence: true
end
