class CreateVivas < ActiveRecord::Migration[5.2]
  def change
    create_table :vivas do |t|
      t.string :institution

      t.timestamps
    end
  end
end
