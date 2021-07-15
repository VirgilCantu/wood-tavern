class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :date
      t.string :time
      t.string :description

      t.timestamps
    end
  end
end
