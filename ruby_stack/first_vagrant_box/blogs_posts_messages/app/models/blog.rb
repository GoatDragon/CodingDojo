class Blog < ApplicationRecord
    validates :name, :description, presence: true
    has_many :post, :dependent => :destroy
end
