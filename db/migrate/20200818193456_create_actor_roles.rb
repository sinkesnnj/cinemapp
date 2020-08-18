class CreateActorRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :actor_roles do |t|
      t.integer :actor_id, null: false
      t.integer :role_id, null: false
    end
  end
end
