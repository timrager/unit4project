# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    { name: "Samantha" },
    { name: "Taylor" },
    { name: "Jeremiah" }
])

Sub.create([
    { name: "Spotify", price: 9.99 },
    { name: "Hulu", price: 5.99 },
    { name: "Netflix", price: 8.99 }
])

