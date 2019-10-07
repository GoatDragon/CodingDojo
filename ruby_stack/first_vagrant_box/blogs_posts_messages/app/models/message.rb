class Message < ApplicationRecord
    validates :author, presence: true
    validates :message, length: {minimum: 15}
    belongs_to :post
end
