class CreateVaccines < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccines do |t|
      t.string :name
      t.string :desc
      t.string :make
      t.belongs_to :destination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
