class CreateUserRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_roles do |t|
      t.integer :user_id, null: false
      t.integer :role_id, null: false

      t.timestamps
    end
  end
end
