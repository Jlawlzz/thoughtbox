class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :url_link
      t.string :title
      t.binary :read_status, default: false
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
