class Pacient < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :age, presence: true
  validates :gender, presence: true


  def display_name
    self.first_name + ' ' + self.last_name
  end

end