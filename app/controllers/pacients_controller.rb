##
# Manejador de peticiones dirigidas a pacientes.
class PacientsController < ApplicationController
  include FormConcern

  private

  ##
  # Método de encapsulacion de los parametros permitodos en este controller.
  def pacient_params
    params.require(:pacient).permit(:first_name, :last_name, :age, :gender_id, :id_number, :phone, :email)
  end
end
