import { useParams } from "react-router-dom";

import { businessProps } from "../../types/businessTypes";

import "./Item.scss";

const Item = () => {
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("itemData") || "");
  const selectedItem = data.find((o: businessProps) => o.id === id);

  const business: businessProps = selectedItem;
  const businessesList: businessProps[] = data;

  const displayNearbyPlaces = (businessesList: businessProps[]) => {
    return businessesList
      .filter(
        (businessItem) => businessItem.address.city === business?.address.city
      )
      .map((nearbyPlace) => (
        <li className="nearbyPlace" key={nearbyPlace.id}>
          <span className="nearbyPlace__name">{nearbyPlace.name}</span>
          <span className="nearbyPlace__info">
            <span>
              {nearbyPlace.address.number}&nbsp;
              {nearbyPlace.address.street}, &nbsp;
              {nearbyPlace.address.city}, &nbsp;
              {nearbyPlace.address.country} &nbsp;
              {nearbyPlace.address.zip}
            </span>
          </span>
        </li>
      ));
  };

  return (
    <div className="business-item">
      <img className="image" src={business?.image} alt="business" />
      <div className="info">
        <div className="address-card">
          <h2>Address</h2>
          <div className="address-card__info">
            <span>
              {business?.address.number} &nbsp;
              {business?.address.street}
              <br />
              {business?.address.city}, &nbsp;
              {business?.address.country} &nbsp;
              {business?.address.zip}
            </span>
          </div>
        </div>
        <div className="contact-card">
          <h2>Contact</h2>
          <div className="contact-card__info">
            <span>
              {business?.phone}&nbsp;
              <br />
              {business?.email}&nbsp;
            </span>
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
