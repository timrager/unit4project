# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_09_011924) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "registers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "sub_id", null: false
    t.integer "qty"
    t.string "frequency", default: "Monthly"
    t.date "start_date"
    t.date "end_date"
    t.index ["sub_id"], name: "index_registers_on_sub_id"
    t.index ["user_id"], name: "index_registers_on_user_id"
  end

  create_table "subs", force: :cascade do |t|
    t.string "name"
    t.decimal "price", precision: 8, scale: 2
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
  end

  add_foreign_key "registers", "subs"
  add_foreign_key "registers", "users"
end
