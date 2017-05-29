class ClinicController < ApplicationController

  [:index, :show, :new].each do |method|
    define_method(method) {redirect_to edit_clinic_path(2)}
  end

  def edit
    id = params[:id] || 2
    @clinic = Clinic.find(id)
  end

  def update
    id = params[:id] || 2
    @clinic = Clinic.find(id)
    begin
      @clinic.attributes = clinic_params
      @clinic.save!
    end
  end

  def clinic_params
    params.require(:clinic).permit(:name, :address)
  end


end
