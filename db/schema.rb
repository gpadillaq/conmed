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

ActiveRecord::Schema.define(version: 20170616035517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer  "pacient_id",       null: false
    t.datetime "appointment_date", null: false
    t.string   "notes"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["pacient_id"], name: "index_appointments_on_pacient_id", using: :btree
  end

  create_table "clinics", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "address",    null: false
    t.string   "phone"
    t.string   "email"
    t.string   "logo_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "state_id"
    t.index ["state_id"], name: "index_clinics_on_state_id", using: :btree
  end

  create_table "countries", force: :cascade do |t|
    t.string "name",         null: false
    t.string "abbreviation", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pacients", force: :cascade do |t|
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
    t.string   "id_number"
    t.string   "phone"
    t.string   "email"
    t.decimal  "age",        null: false
    t.decimal  "gender",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "states", force: :cascade do |t|
    t.string  "name",         null: false
    t.string  "abbreviation", null: false
    t.integer "country_id"
    t.index ["country_id"], name: "index_states_on_country_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "appointments", "pacients"
  add_foreign_key "clinics", "states"
  add_foreign_key "states", "countries"
end
