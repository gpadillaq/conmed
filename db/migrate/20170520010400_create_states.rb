class CreateStates < ActiveRecord::Migration[5.0]
  def change
    create_table :states do |t|
    	t.string :name, null: false
    	t.string :abbreviation, null: false   
    	t.references :country 	
    end
    add_foreign_key :states, :countries
  end
end
