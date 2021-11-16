import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement ...</div>
  ) : (
    <div className="header">
      {data.offers.map((offer, index) => {
        return (
          <div className="offer">
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <h3>{offer.product_name}</h3>
              <img
                style={{ height: 360, width: 235 }}
                src={offer.product_image.secure_url}
                alt="offer.product_name"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
