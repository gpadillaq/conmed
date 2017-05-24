class Clinic < ActiveRecord::Base

  self.primary_key = :id

  attr_accessible :id, :name, :address, :phone, :email, :logo_url

  validates :name, presence: true
  validates :address, presence: true


  belongs_to :state

  def display_name
    self.name
  end


end