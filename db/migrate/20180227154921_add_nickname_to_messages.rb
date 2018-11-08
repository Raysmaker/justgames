class AddNicknameToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :nickname, :string
    change_column_null :messages, :nickname, false
  end
end