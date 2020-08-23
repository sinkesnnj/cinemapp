class AddDescriptionToTheatres < ActiveRecord::Migration[6.0]
  def change
    add_column :theatres, :description, :text
  end
end
