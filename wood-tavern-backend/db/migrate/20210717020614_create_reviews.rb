class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :content
      t.string :date

      t.timestamps
    end
  end
end
