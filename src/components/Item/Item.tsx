import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { businessProps } from "../../types/businessTypes";

import "./Item.scss";

const Item = () => {
  const { state }: any = useLocation();

  const cachedData = useQuery("state", () => {
    return state;
  });

  const [business, setBusiness] = useState(state.business);
  const [businessesList, setBusinessesList] = useState(state.businessesList);

  useEffect(() => {
    if (cachedData.data) {
      setBusiness(cachedData.data.business);
      setBusinessesList(cachedData.data.businessesList);
    }
  }, [cachedData.data]);

  const displayNearbyPlaces = (businessesList: businessProps[]) => {
    return businessesList
      .filter(
        (businessItem) => businessItem.address.city === business.address.city
      )
      .map((nearbyPlace) => (
        <li className="nearbyPlace" key={nearbyPlace.id}>
          <span className="nearbyPlace__name">{nearbyPlace.name}</span>
          <span className="nearbyPlace__info">
            <span>{nearbyPlace.address.number}&nbsp;</span>
            <span>{nearbyPlace.address.street}, &nbsp;</span>
            <span>{nearbyPlace.address.city}, &nbsp;</span>
            <span>{nearbyPlace.address.country} &nbsp;</span>
            <span>{nearbyPlace.address.zip}</span>
          </span>
        </li>
      ));
  };

  return (
    <div className="business-item">
      <img className="image" src={business.image} alt="business" />
      <div className="info">
        <div className="address-card">
          <h2>Address</h2>
          <div className="address-card__info">
            <span>{business.address.number} &nbsp;</span>
            <span>{business.address.street}</span>
            <br />
            <span>{business.address.city}, &nbsp;</span>
            <span>{business.address.country} &nbsp;</span>
            <span>{business.address.zip}</span>
          </div>
        </div>
        <div className="contact-card">
          <h2>Contact</h2>
          <div className="contact-card__info">
            <span>{business.phone}&nbsp;</span>
            <br />
            <span>{business.email}&nbsp;</span>
          </div>
        </div>
        <div className="nearby-places">
          <h2>Nearby Places</h2>
          <div className="nearby-places__info">
            <ul>{displayNearbyPlaces(businessesList)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
