class CreateRegisters < ActiveRecord::Migration[6.0]
  def change
    create_table :registers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :sub, null: false, foreign_key: true
      t.integer :qty
      t.string :frequency, default: "Monthly"
      t.date :start_date
      t.date :end_date

    end
  end
end
