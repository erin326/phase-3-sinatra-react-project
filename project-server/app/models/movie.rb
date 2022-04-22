class Movie < ActiveRecord::Base 
    belongs_to :genre

    def genre_name=(genre_name)
        self.genre = Movie.find_or_create_by(title: genre_name)
    end
end