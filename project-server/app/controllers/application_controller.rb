class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/movies' do 
    movies = Movie.all
    # movies.genre.title
    movies.to_json(include: [:genre])
  end

  get '/movies/:id' do 
    puts params
    movie = Movie.find(params[:id])
    genre = movie.genre
    genre.to_json
  end

  post '/movies' do 
    puts params

    # new_movie = Movie.create(
    #   title: params[:title],
    #   genre: params["genre"]["name"],
    #   quote: params[:quote],
    #   rating: params[:rating]
    # )
    # new_movie.to_json

    movie_params = params.select do |k, v|
      ["title", "quote", "rating", "genre"].include?(k)

    end
    movie = Movie.create(movie_params)
    movie.to_json
  end

  delete '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.destroy
    movie.to_json
  end

  patch '/movies/:id' do 
    movie = Movie.find(params[:id])
    movie.update(title: params[:title], quote: params[:quote], rating: params[:rating])
    movie.to_json
  end

  post '/genres' do 
    genre = Genre.create(title: params[:title])
    genre.to_json
  end

  get '/genres' do 
    genres = Genre.all
    genres.to_json
  end


 

end

   # new_movie = Movie.create(
    #   title: params[:body],
    #   quote: params[:quote],
    #   rating: params[:rating]
    # )
    #   # genre_id: params[:genre.id]
    
    # # new_genre = Genre.create(
    # #   name: params[:genre]
    # # )
    # # new_movie.genre_id = new_genre.id
    # # new_movie << new_genre
    # # new_genre.to_json
    # new_movie.to_json