class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.references :pacient, null: false
      t.date :appointment_date, null: false
      t.string :notes

      t.timestamps
    end
    add_foreign_key :appointments, :pacients
  end
end
