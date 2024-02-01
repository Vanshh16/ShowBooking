// MovieDetails.js

import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../components/Form';

function MovieDetails() {
    const location = useLocation();
    const {movie} = location.state;
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("NA"); 
    const [network, setNetwork] = useState("NA");

    useEffect(()=>{
        movie.image ? (movie.image.original ? (setImage(movie.image.original)) : setImage("NA")) : (setImage("NA"));
        movie.rating.average ? (setRating(movie.rating.average)) : setRating("NA") ;
        movie.network ? (setNetwork(movie.network.name)) : setNetwork("NA") ;        
    }, [])
    console.log(location.state);
    const [formData, setFormData] = useState({
        movie: movie.name,
        name: '',
        email: '',
        mobile: '',
        numberOfTickets: 1,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
      function createMarkup() {
        return {__html: movie.summary};
      }      

  return (
    <div className="movie-details-container">
      <h2 style={{textAlign:"center", fontSize:"50px"}}>{movie.name}</h2>
      <img src={image} alt={movie.name} />
      <p>Genre: {movie.genres.map(function(genre){
            return <span>{genre} </span>
          })}</p>
      <p style={{display: 'inline-block'}}>Premiere Date: {movie.premiered}</p>
      <p style={{display: 'inline-block'}} className='ml-28'>Status: {movie.status}</p>
      <p>Language: {movie.language}</p>
      <p>Ratings: {rating}</p>
      <p>Schedule: {movie.schedule.time}, {movie.schedule.days[0]}</p>
      <p>Network: {network}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Type: {movie.type}</p>
      <p>Description: </p><p dangerouslySetInnerHTML={createMarkup()}/>
      <Form movie={movie}/>
    </div>
  );
};

export default MovieDetails;
