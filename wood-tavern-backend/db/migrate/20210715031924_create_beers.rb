class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.string :abv
      t.string :brewery
      t.string :location

      t.timestamps
    end
  end
end
