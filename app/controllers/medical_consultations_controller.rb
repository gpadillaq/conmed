class MedicalConsultationsController < ApplicationController
  include FormConcern

  private

  def medical_consultation_params
    params.require(:medical_consultation).permit(:pacient_id)
  end
end