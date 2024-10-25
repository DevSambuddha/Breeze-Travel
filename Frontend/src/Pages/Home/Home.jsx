import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HotelCard from "../../Component/HotelCard/HotelCard";
import "./Home.css";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://monkfish-app-ivioy.ondigitalocean.app/api/v1/hotels"
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <HotelCard />
      </main>
    </>
  );
};

export default Home;
