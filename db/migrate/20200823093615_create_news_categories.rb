class CreateNewsCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :news_categories do |t|
      t.integer :news_id, null: false
      t.integer :categorie_id, null: false
    end
  end
end
