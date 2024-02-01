// Form.js

import React, { useState, useEffect} from 'react';

function Form({movie}) {

    const [formData, setFormData] = useState({
        movie: movie.name,
        name: '',
        email: '',
        mobile: '',
        numberOfTickets: 1,
      });
      useEffect(()=>{
        if(localStorage.getItem("name")){
            setFormData({
                movie: movie.name,
                name: localStorage.getItem("name"),
                email: localStorage.getItem("email"),
                mobile: localStorage.getItem("mobile"),
                numberOfTickets: 1,
              });
          }
      },[])
      
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
        localStorage.setItem("name", formData.name);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("mobile", formData.mobile);
      };    

  return (
    <div className="booking-form-container">
      <h2>Movie Booking</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Movie: 
          <input
            type="text"
            name="movie"
            value={formData.movie}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email: 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile no.: 
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Tickets: 
          <input
            type="number"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min="1"
            required
            style={{width:"50px"}}
          />
        </label>
        <button className='formButton' type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Form;
