class CreatePacients < ActiveRecord::Migration[5.0]
  def change
    create_table :pacients do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :id_number
      t.string :phone
      t.string :email
      t.number :edad, null: false

      t.timestamps
    end
  end
end
