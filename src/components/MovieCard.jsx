// MovieCard.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const MovieCard = (prop) => {
    const navigate = useNavigate();
    const movie = prop.movie.show;
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("NA"); 
    useEffect(()=>{
        movie.image ? (movie.image.medium ? (setImage(movie.image.medium)) : setImage("NA")) : (setImage("NA"));
        movie.rating.average ? (setRating(movie.rating.average)) : setRating("NA") ;
    }, [])
    const data = {a:"a", b:"b"};
  return (
    <div className="card ml-16">
      <img className="card-img-top" src={image} alt={movie.name} />
      <div className="card-body" key={1}>
        <h5 className="card-title" key={1}>{movie.name}</h5>
        <p className="card-text">
          <span>Genre:</span> {movie.genres.map(function(genre){
            return <span>{genre} </span>
          })}
        </p>
        <p className="card-text">
          <span>Premiered:</span> {movie.premiered}
        </p>
        <p className="card-text">
          <span>Ratings:</span> {rating}
        </p>
        <button onClick={()=>{
            navigate("/details", {state:{movie, image, rating}})
        }} className="card-button">show more
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
