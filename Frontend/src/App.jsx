//import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SingleHotel from "./Pages/SingleHotel/SingleHotel";
import "./App.css";
import SearchResults from "./Pages/SearchResults/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:hotelname/:address/:_id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
