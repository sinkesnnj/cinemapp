class AddSurnameToActors < ActiveRecord::Migration[6.0]
  def change
    add_column :actors, :surname, :string
  end
end
