import React from "react";
import Movies from "./component/Movies";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from "./component/MovieDetails";
import Form from "./component/Form";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Movies />} />
    <Route path="/details/:id" element={<MovieDetails/>}></Route>
    <Route path="/form/:id" element={<Form/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    
    
  
  
    </>
  );
}

export default App;
