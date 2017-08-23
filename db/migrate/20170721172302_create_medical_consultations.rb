class CreateMedicalConsultations < ActiveRecord::Migration[5.0]
  def change
    create_table :medical_consultations do |t|
      t.references :pacient, null: false
      t.references :appointment

      t.string :weight
      t.string :height
      t.string :blood_preasure
      t.text :symptoms, null: false
      t.text :diagnostic, null: false
      t.text :treatment, null: false
      t.text :test_results
      t.datetime :medical_consultation_date
      t.datetime :next_date
      t.decimal :cost, precision:14, scale: 2

      t.timestamps
    end
    add_foreign_key :medical_consultations, :pacients
    add_foreign_key :medical_consultations, :appointments
  end
end
