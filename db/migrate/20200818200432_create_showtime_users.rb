class CreateShowtimeUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :showtime_users do |t|
      t.integer :showtime_id, null: false
      t.integer :user_id, null: false
      t.integer :row_number, null: false
      t.integer :seat_number, null: false
      t.timestamps
    end
  end
end
