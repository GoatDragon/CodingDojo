class Dojo < ApplicationRecord
    validates :name, :city, presence:true
    validates :state, length:{minimum:2}
    has_many :ninjas, :dependent => :destroy
end
