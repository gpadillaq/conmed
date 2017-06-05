class Pacient < ActiveRecord::Base
  ##
  # Validaciones de campos requeridos.
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :age, presence: true
  validates :gender, presence: true


  def display_name
    [self.first_name, self.last_name].join(' ')
  end

end