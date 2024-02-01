import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Details from "./pages/Details";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Movie />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
