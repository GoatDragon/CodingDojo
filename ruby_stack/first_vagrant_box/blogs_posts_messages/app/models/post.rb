class Post < ApplicationRecord
    validates :content, presence: true
    validates :title, length: {minimum: 7}
    has_many :message, :dependent => :destroy
    belongs_to :blog
end
