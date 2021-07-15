class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :format
      t.string :style
      t.string :abv
      t.string :brewery
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
