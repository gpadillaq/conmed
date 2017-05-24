class CreateClinics < ActiveRecord::Migration[5.0]
  def change
    create_table :clinics do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone
      t.string :email
      t.string :logo_url

      t.timestamps
      t.references :state
    end
    add_foreign_key :clinics, :states
  end
end
