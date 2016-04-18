class Link < ActiveRecord::Base

  validates :url_link, presence: true
  validates :title, presence: true
  validates :url_link, url: true

end
