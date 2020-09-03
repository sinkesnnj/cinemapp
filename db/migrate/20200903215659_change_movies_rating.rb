class ChangeMoviesRating < ActiveRecord::Migration[6.0]
  def change
    change_column :movies, :rating, :float, default: 1
  end
end
