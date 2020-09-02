class CreateMovieGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_genres do |t|
      t.integer :movie_id, null: false
      t.integer :genre_id, null: false

      t.timestamps
    end
  end
end
