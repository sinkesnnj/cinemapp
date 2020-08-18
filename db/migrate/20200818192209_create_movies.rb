class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name, null: false
      t.text :summary
      t.date :release_date
      t.string :run_time
      t.string :poster_path
      t.string :rating

      t.timestamps
    end
  end
end
