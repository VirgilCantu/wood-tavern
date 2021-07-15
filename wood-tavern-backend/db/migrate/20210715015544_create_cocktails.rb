class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :glassware
      t.string :ice
      t.string :image
      t.string :origin
      t.string :preparation

      t.timestamps
    end
  end
end
