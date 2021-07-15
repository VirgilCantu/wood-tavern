class Beer < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :style, presence: true
    validates :abv, presence: true
    validates :brewery, presence: true
    validates :location, presence: true
end
