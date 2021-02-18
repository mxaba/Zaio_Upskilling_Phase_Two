import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseOnSaleFetch } from "../store/Actions/housesFetch";
import { Link } from "react-router-dom";
import screenLoader from "../images/screenLoad.gif";
import "../StyleSheet/MainContent.css";

const MainContent = () => {
  const { loading, error, houseOnSale } = useSelector(
    (state) => state.housesOnSale
  );
  const { rentHouses } = useSelector(
    (state) => state.rentHouses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseOnSaleFetch());
  }, []);

  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <div className="listedHouses">
            {houseOnSale.map((house) => {
              return (
                <div className="col-sm-3 House__details" key={house._id}>
                  <div className="img-conatiner">
                    <Link
                      to={`/house/${house.house_location.province}/${house._id}`}
                    >
                      <img src={house.house_properties.houseImage} alt="House" width="300" height="200" />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`R ${house.house_properties.housePrice}`}</h4>
                    <h4 className="House__snipDescription">{` ${house.house_properties.bedroomNumber} Bedroom house for sale in ${house.house_location.province}`}</h4>
                  </div>
                </div>
              );
            })}
            {rentHouses.map((house) => {
              return (
                <div className="col-sm-3 House__details" key={house._id}>
                  <div className="img-conatiner">
                    <Link to={`/house/${house.house_location.province}/${house._id}`} >
                      <img src={house.house_properties.houseImage} alt="House" width="300" height="200" />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`R${house.house_properties.housePrice}`}</h4>
                    <h4 className="House__snipDescription">{`${house.house_properties.bedroomNumber} Bedroom house for sale in ${house.house_location.province}`}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
