class PacientsController < ApplicationController

  def index
    @pacients = Pacient.all
  end

  def new
    @pacient = Pacient.new
  end

  def show
    id = params[:id]
    if id.present?
      @pacient = Pacient.find(id)
    end
  end

  def edit
    id = params[:id]
    if id.present?
      @pacient = Pacient.find(id)
    end
  end

  def save(pacient)
    if pacient.present
      begin
        @pacient.attributes = pacient_params
        @pacient.save!
        redirect_to pacient_index_url
      end
    end
  end

  def pacient_params
    params.require(:pacients).permit(:first_name, :last_name, :age, :gender, :id_number, :phone, :email)
  end

end
