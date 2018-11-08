class AddGameNameToDesk < ActiveRecord::Migration[5.1]
  def change
    add_column :desks, :game_name, :string
    change_column_null :desks, :game_name, false
  end
end
