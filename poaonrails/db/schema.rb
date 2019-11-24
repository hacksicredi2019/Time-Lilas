# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191124102445) do

  create_table "badges", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "category"
    t.string   "icon"
    t.integer  "school_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "badges", ["school_id"], name: "index_badges_on_school_id"

  create_table "features", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "category"
    t.float    "rating"
    t.integer  "school_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "icon"
  end

  add_index "features", ["school_id"], name: "index_features_on_school_id"

  create_table "ratings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "school_id"
    t.text     "pros"
    t.text     "cons"
    t.float    "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "category"
  end

  add_index "ratings", ["school_id"], name: "index_ratings_on_school_id"
  add_index "ratings", ["user_id"], name: "index_ratings_on_user_id"

  create_table "schools", force: :cascade do |t|
    t.string   "name"
    t.integer  "vacancy"
    t.float    "rating"
    t.string   "category"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "description"
    t.integer  "cod"
    t.string   "address"
    t.integer  "address_number"
    t.string   "address_complement"
    t.string   "address_district"
    t.integer  "address_cep"
    t.string   "phone"
    t.string   "public_phone"
    t.string   "fax"
    t.float    "lat"
    t.float    "long"
  end

  create_table "statistics", force: :cascade do |t|
    t.string   "danger_district"
    t.float    "ratings"
    t.float    "security"
    t.float    "accessibility"
    t.float    "teaching"
    t.float    "infrastruc"
    t.integer  "school_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "statistics", ["school_id"], name: "index_statistics_on_school_id"

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "cpf"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "password"
  end

end
