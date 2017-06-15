class AppointmentsController < ApplicationController
  include FormConcern

  private

  def appointment_params
    params.require(:appointment).permit(:pacient_id, :appointment_date, :notes)
  end
end

