class AddOrgToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :Org, :integer
  end
end
