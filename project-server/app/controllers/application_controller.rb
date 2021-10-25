class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/movies' do 
    movies = Movie.all
    movies.to_json(include: [:genre])
  end

  post '/movies' do 
    new_movie = Movie.create(
      title: params[:body],
      quote: params[:quote],
      rating: params[:rating]
    )
      # genre_id: params[:genre.id]
    
    # new_genre = Genre.create(
    #   name: params[:genre]
    # )
    # new_movie.genre_id = new_genre.id
    # new_movie << new_genre
    # new_genre.to_json
    new_movie.to_json
   
  end

end
