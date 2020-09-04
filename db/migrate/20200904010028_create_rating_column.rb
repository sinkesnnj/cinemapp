class CreateRatingColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :movies, :rating
    add_column :movies, :rating, :float, default: 1
    end
  end
end
