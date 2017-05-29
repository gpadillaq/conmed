class Clinic < ActiveRecord::Base
  validates :name, presence: true
  validates :address, presence: true

  belongs_to :state

  def display_name
    self.name
  end

end
