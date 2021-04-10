class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.text :notes
      t.string :reqs
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
