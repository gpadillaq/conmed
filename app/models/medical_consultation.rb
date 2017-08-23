class MedicalConsultation < ActiveRecord::Base

  validates :pacient_id, presence: true

  belongs_to :pacient
 # belongs_to :appointment

#  def display_name
#  end

end
