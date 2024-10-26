import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HotelCard from "../../Component/HotelCard/HotelCard";
import "./Home.css";
import axios from "axios";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://monkfish-app-ivioy.ondigitalocean.app/api/v1/hotels"
        );
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="main d-flex align-center wrap gap-larger">
        {hotels &&
          hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </main>
    </>
  );
};

export default Home;
