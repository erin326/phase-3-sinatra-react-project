class Movie < ActiveRecord::Base 
    belongs_to :genre

    def genre_match=(genre_match)
        self.genre = Movie.find_or_create_by(name: genre_match)
    end
end