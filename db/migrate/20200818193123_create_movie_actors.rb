class CreateMovieActors < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_actors do |t|
      t.integer :movie_id, null: false
      t.integer :actor_id, null: false
      t.string :character_name, null: false
      t.timestamps
    end
  end
end
