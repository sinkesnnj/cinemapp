class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :review_text, null: false
      t.float :rating
      t.integer :user_id
      t.integer :movie_id, null: false

      t.timestamps
    end
  end
end
