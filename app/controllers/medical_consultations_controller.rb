class MedicalConsultationsController < ApplicationController
  include FormConcern

  private

  def medical_consultation_params
    params.require(:medical_consultation).permit(:pacient_id, :weight, :height, :blood_preasure, :symptoms, :diagnostic, :treatment, :test_results, :medical_consultation_date, :next_date, :cost)
  end
end