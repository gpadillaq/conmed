##
# Manejador de peticiones dirigidas a pacientes.
class PacientsController < ApplicationController
  include FormConcern
  def index
    @pacients = Pacient.all
    render component: 'Pacients', props: { pacients: @pacients }
  end

  def new
    @pacient = Pacient.new
    render component: 'NewPacient', props: { pacient: @pacient }
  end

  def edit
    @pacient = Pacient.find(params[:id])
    render component: 'NewPacient', props: { pacient: @pacient }
  end

  def create
    @pacient = Pacient.new(pacient_params)
    respond_to do |format|
      format.json do
        if @pacient.save
          render :json => @pacient
        else
          render :json => { :errors => @pacient.errors.messages }, :status => 422
        end
      end
    end
  end
  private

  ##
  # Método de encapsulacion de los parametros permitodos en este controller.
  def pacient_params
    params.require(:pacient).permit(:first_name, :last_name, :age, :gender, :id_number, :phone, :email)
  end
end
