class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :url
      t.string :summary
      t.text :body
      t.string :image
      t.boolean :active

      t.timestamps
    end
  end
end
