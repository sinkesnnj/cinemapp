class CreateNews < ActiveRecord::Migration[6.0]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.string :short_description, null: false
      t.text :story_text, null: false
      t.date :release_date
      t.string :poster_path

      t.timestamps
    end
  end
end
