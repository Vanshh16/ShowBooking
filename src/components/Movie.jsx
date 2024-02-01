import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movie = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all#")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <div className="heading">
        <header>
          <p>Moviesss Booking</p>
        </header>
      </div>
      {movies ? (
        movies.map(function (movie) {
          return <MovieCard key={movie.show.id} movie={movie} />;
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Movie;
