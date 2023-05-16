class Property < ApplicationRecord
  mount_uploader :photo, PhotoUploaderUploader
  belongs_to :account

  scope :latest, -> { order created_at: :desc }
end
