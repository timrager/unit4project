class User < ApplicationRecord
    has_many :registers
    has_many :subs, through: :registers
end
