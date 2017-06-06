##
# Concern con los métodos básicos para un controller con actions de creación, actualizacion, etc..
module FormConcern
  extend ActiveSupport::Concern

  ##
  # Contiene los callback que preparan los datos de los actions del controllador, asi como
  # la definicion de los metodos principales de un controlador.
  included do
    # Llama al método +search_or_create+ antes de invocar los actions +new+, +show+, +edit+, +create+, +update+
    before_action :search_or_create, only: [:new, :show, :edit, :create, :update]
    # Llama al método +scoped_collection+ antes de invocar al actions +index+
    before_action :scoped_collection, only: :index

    ##
    # Agrega un flash alert cuando la lista de +records+ esta vacia, Tambien renderiza la plantilla
    # del index conrrespondiente al controlador.
    def index
      flash.now[:alert] = 'No existen registros para los datos filtrados' if @records.empty?
    end

    ##
    # Definle los métodos +new+, +show+, +edit+ con un bloque de código vacio.
    #
    # ==== Ejemplos
    # Esta definición es esquivalente a:
    #   def new; end
    #   def edit; end
    #   def show; end
    [:new, :edit, :show].each do |method|
      define_method(method) {}
    end

    ##
    # Define los métodos +create+, +update+ con el bloque de código del método +save+
    #
    # ==== Ejemplos
    # Esta definición es esquivalente a:
    #   def create
    #     save
    #   end
    #
    #   def update
    #     save
    #   end
    [:create, :update].each do |method|
      define_method(method) {save}
    end
  end

  private

  ##
  # Optiene la coleccion de datos correspondiente al modelo al que pertenece al controlador
  def scoped_collection
    @records = model.all
    respond_to do |format|
      format.html { @records }
      format.json { render json: @records.to_json }
    end
  end

  ##
  # Busca o crea una instancia del modelo al que pertenece el controller, esto en dependecia del
  # accion que se este invocando.
  #
  # ==== Ejemplos:
  # - Si el action es +new+ o +create+ este metodo retorna una nueva instancia.
  # - Si el action es +edit+ o +update+ busca el recurso segun el +params[:id]+ y crea una instancia
  # con ese recurso.
  def search_or_create
    id = params[:id]
    @record = id.present? ? model.find(id) : model.new
  end

  ##
  #  Determina el modelo del controller basado en el nombre de este.
  def model
    controller.singularize.camelcase.constantize
  end

  ##
  # Retorna el nombre del controller que se este invocando.
  def controller
    self.controller_name
  end

  ##
  # Determina el +path+ del index del controller que se este invocando.
  def index_path
    send([controller, 'path'].join('_').to_sym)
  end

  ##
  # Retorna los parametros permitidos por el controller que se este invocando. Esto se determina
  # determinando el metodo que encapsula los parametros permitido segun cada controller.
  def record_params
    send([controller.singularize, 'params'].join('_').to_sym)
  end

  ##
  # Determina la ruta de donde viene la peticion, esto se hace basado en si el recurso ha sido guardado o no.
  def back_path
    @record.new_record? ? :new : :edit
  end

  ##
  # Actualiza los atributos de la instancia con los datos enviados desde el navegador, y luego los guarda.
  def save
    begin
      @record.attributes = record_params
      @record.save!
      flash[:success] = 'Datos almacenados exitosamente!'
      redirect_to index_path
    rescue ActiveRecord::RecordInvalid
      flash.now[:danger] = 'Verifique los datos insertados'
      render back_path
    end
  end
end
