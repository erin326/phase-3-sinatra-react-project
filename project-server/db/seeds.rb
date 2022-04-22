puts "🌱 Seeding data..."

Genre.delete_all
Movie.delete_all

genre_names = ["Horror", "Thriller", "Fantasy", "Romantic Comedy", "Comedy", "Drama"]

genre_names.map do |name|
    Genre.create(title: name)
end

Genre.all.each do |genre|
    3.times do 
        Movie.create(
            title: Faker::Movie.title,
            quote: Faker::Movie.quote,
            rating: rand(0...5),
            genre_id: genre.id
        )
    end
end


puts "✅ Done seeding!"
