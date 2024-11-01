import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import HotelImages from "../../Component/HotelImages/HotelImages";
import HotelDetails from "../../Component/HotelDetails/HotelDetails";

import "./SingleHotel.css";

const SingleHotel = () => {
  const { _id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://monkfish-app-ivioy.ondigitalocean.app/api/v1/hotels/${_id}`
        );
        console.log(data);

        setSingleHotel(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { name, state } = singleHotel;

  return (
    <>
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name},{state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div>
          <HotelDetails singleHotel={singleHotel} />
        </div>
      </main>
    </>
  );
};

export default SingleHotel;
