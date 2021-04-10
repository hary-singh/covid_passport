class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :city
      t.string :hours
      t.belongs_to :vaccine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
