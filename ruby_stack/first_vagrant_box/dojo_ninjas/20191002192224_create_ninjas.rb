class CreateNinjas < ActiveRecord::Migration[5.0]
  def change
    create_table :ninjas do |t|
      t.references :dojo
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
