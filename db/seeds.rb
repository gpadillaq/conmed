# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Clinic.create({ name: 'Clínica', address: 'Dirección'})
if User.all.blank?
  User.create!(email: 'admin@conmed.com', password: 'adminC0nm3d', password_confirmation: 'adminC0nm3d')
end
