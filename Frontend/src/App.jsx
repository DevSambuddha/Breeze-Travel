//import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SingleHotel from "./Pages/SingleHotel/SinglHotel";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

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
