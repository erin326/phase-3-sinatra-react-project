class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :quote
      t.integer :rating
      t.integer :genre_id
    end
  end
end
