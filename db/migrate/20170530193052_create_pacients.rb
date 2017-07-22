class CreatePacients < ActiveRecord::Migration[5.0]
  def change
    create_table :pacients do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :id_number
      t.string :phone
      t.string :email
      t.numeric :age, null: false
      t.references :gender

      t.timestamps
    end
    add_foreign_key :pacients, :genders
  end
end
