class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :post, foreign_key: true
      t.string :author
      t.string :message

      t.timestamps
    end
  end
end
