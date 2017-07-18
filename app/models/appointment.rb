class Appointment < ActiveRecord::Base

  validates :pacient_id, presence: true
  validates :appointment_date, presence: true

  belongs_to :pacient

  def display_name
    self.appointment_date
  end

end
