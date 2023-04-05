import React from 'react'
import './form.css'
import { useLocation } from 'react-router-dom'
import { useState } from "react";


const Form = () => {
    const location = useLocation();
    const movieName = location.state;

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email };
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Form submitted successfully!");
  }


    
  return (
    <div className='form'>
        <h1> Movie Name: <span>{movieName}</span></h1>

        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>

        </div>
  )
}

export default Form;