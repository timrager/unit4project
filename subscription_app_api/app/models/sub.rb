class Sub < ApplicationRecord
    has_many :registers
    has_many :users, through: :registers
end
