class PacientController < ApplicationController
  def index
  end

  def show
    @pacients = Pacients.all
  end
  
end
