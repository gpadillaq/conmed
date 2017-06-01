class PacientController < ApplicationController
  def index
    @pacients = Pacient.all
  end

  def show
    @pacients = Pacient.all
  end

  def new
    @pacient = Pacient.new
  end

  def create
    begin
      @pacient = Pacient.new
      @pacient.attributes = pacient_params
      @pacient.save!
    end
    redirect_to pacient_index_url
  end

  def pacient_params
    params.require(:pacient).permit(:first_name, :last_name, :age, :gender, :id_number, :phone, :email)
  end

end
