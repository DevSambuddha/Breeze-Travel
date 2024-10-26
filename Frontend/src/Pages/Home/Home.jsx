import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../../Component/Navbar/Navbar";
import HotelCard from "../../Component/HotelCard/HotelCard";
import "./Home.css";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);

  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://monkfish-app-ivioy.ondigitalocean.app/api/v1/hotels"
        );
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  return (
    <>
      <Navbar />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && <h3 className="alert-text">Loading...</h3>
          }
          endMessage={<p className="alert-text">End</p>}
        >
          <main className="main d-flex align-center wrap gap-larger">
            {hotels &&
              hotels.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
