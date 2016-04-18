class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :url_link
      t.string :title
      t.binary :read_status, default: false

      t.timestamps null: false
    end
  end
end
