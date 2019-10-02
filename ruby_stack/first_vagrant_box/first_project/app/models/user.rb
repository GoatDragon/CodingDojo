class User < ApplicationRecord
    validates :first_name, :last_name, :age, :email, presence:true
    validates :first_name, :last_name, length: { in: 2..20 }
    validates_numericality_of  :age, greater_than:10, less_than:150

    has_one :address
    has_many :messages
end
