import { useEffect, useState } from "react";
import axios from "axios";
import DateSelector from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useDate } from "../../context/date-context";
import { useCategory } from "../../context/category-context";
import { useNavigate } from "react-router-dom";

const SearchStayWithDate = () => {
  const { destination, guests, dateDispatch, isSearchModalOpen } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://breeze-travel-3u24.onrender.com/api/v1/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [hotelCategory]);

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };

  const handleDestinationFocus = () => {
    dateDispatch({
      type: "SHOW_SEARCH_RESULT",
    });
  };

  const handleSearchButtonClick = () => {
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    });
    navigate(`/hotels/${destination}`);
  };

  const handleSearchCloseClick = () => {
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    });
  };

  const destinationOption = hotels.filter(
    ({ address, city, state, country }) => {
      return (
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase())
      );
    }
  );

  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            className="input search-dest"
            placeholder="Search Destination"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label">Check in</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="location-container">
          <label className="label">Check out</label>
          <DateSelector checkOutType="out" />
        </div>
        <div className="location-container">
          <label className="label">Number of Guests</label>
          <input
            value={guests}
            className="input search-dest"
            placeholder="Add Guest"
            onChange={handleGuestChange}
          />
        </div>
        <div
          className="search-container d-flex align-center cursor"
          onClick={handleSearchButtonClick}
        >
          <span className="material-symbols-outlined">search</span>
          <span>Search</span>
        </div>
      </div>
      {isSearchModalOpen && (
        <div className="search-result-container absolute">
          {destinationOption &&
            destinationOption.map(({ address, city }, index) => (
              <p
                key={`${address}-${index}`}
                className="p cursor-pointer"
                onClick={() => handleSearchResultClick(address)}
              >
                {address}, {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchStayWithDate;
