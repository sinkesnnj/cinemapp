class CreateShowtimes < ActiveRecord::Migration[6.0]
  def change
    create_table :showtimes do |t|
      t.integer :movie_id, null: false
      t.integer :theatre_id, null: false
      t.date :projection_date
      t.time :projection_time

      t.timestamps
    end
  end
end
