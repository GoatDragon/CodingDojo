class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :blog, foreign_key: true
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
