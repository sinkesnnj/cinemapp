class CreateTheatres < ActiveRecord::Migration[6.0]
  def change
    create_table :theatres do |t|
      t.string :name, null: false
      t.integer :seating_capacity, null: false
      t.string :image_path
      t.timestamps
    end
  end
end
