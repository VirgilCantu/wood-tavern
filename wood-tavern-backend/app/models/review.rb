class Review < ApplicationRecord
    validates :title, presence: true
    validates :name, presence: true
    validates :content, presence: true
    validates :date, presence: true
    validates :rating, presence: true
end
