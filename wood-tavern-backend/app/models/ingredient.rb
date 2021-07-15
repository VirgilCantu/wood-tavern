class Ingredient < ApplicationRecord
    has_many :cocktail_ingredients
    has_many :cocktails, through: :cocktail_ingredients

    validates :name, presence: true
    validates :category, presence: true
    validates :quantity, presence: true
end
