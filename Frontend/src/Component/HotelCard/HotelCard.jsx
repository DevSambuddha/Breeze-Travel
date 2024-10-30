import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
const HotelCard = ({ hotel }) => {
  const { _id, hotelname, image, address, state, rating, price } = hotel;

  const navigate = useNavigate();

  const handleHotelCardClick = () => {
    navigate(`/hotels/${hotelname}/${address}-${state}/${_id}/reserve`);
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img className="img" src={image} alt={hotelname} />
        <div className="hotelcard-details">
          <div className="info d-flex align-center">
            <span className="location">
              {address}, {state}
            </span>
            <span className="rating d-flex align-center ">
              <span className="material-symbols-outlined">star_half</span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name">{hotelname}</p>
          <p className="price-details">
            <span className="price">Rs. {price}</span>
            <span>per night</span>
          </p>
        </div>
        <div className="wishlist">
          <button className="button btn-wishlist absolute">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
