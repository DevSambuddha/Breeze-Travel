//import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SingleHotel from "./Pages/SingleHotel/SingleHotel";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:hotelname/:address/:_id/reserve"
        element={<SingleHotel />}
      />
    </Routes>
  );
}

export default App;
