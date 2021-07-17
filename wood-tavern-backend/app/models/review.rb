class Review < ApplicationRecord
    validates :name, presence: true
    validates :content, presence: true
    validates :date, presence: true
    validates :rating, presence: true
end
