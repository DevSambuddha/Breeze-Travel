import { Fragment, useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useDate } from "../../context/date-context";
import HotelCard from "../../Component/HotelCard/HotelCard";
import { useCategory } from "../../context/category-context";
import axios from "axios";

const SearchResults = () => {
  const { destination } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://monkfish-app-ivioy.ondigitalocean.app/api/v1/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [destination]);

  const filteredSearchResult = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase()
  );

  return (
    <Fragment>
      <Navbar />
      <section className="main d-flex align-center gap-larger">
        {filteredSearchResult ? (
          filteredSearchResult.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        ) : (
          <h3>Nothing Found</h3>
        )}
      </section>
    </Fragment>
  );
};

export default SearchResults;
