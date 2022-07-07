import { useLocation } from "react-router-dom";
import "./Item.scss";
import { businessProps } from "../../types/businessTypes";
import React, { FC } from "react";

const Item: React.FC = () => {
  const { state }: any = useLocation();

  const business: businessProps = state.business;

  return (
    <div className="business-item">
      <img src={business.image} alt="business" />

      <div className="business-item__address-card">
        <h3>Address</h3>
        <div className="business-item__address-card__info">
          <span>{business.address.number}&nbsp;</span>
          <span>{business.address.street}</span>
          <br />
          <span>{business.address.city}, &nbsp;</span>
          <span>{business.address.country} &nbsp;</span>
          <span>{business.address.zip}</span>
        </div>
      </div>
      <div className="business-item__contact-card">
        <h3>Contact</h3>
        <div className="business-item__contact-card__info">
          <span>{business.phone}&nbsp;</span>
          <br />
          <span>{business.email}&nbsp;</span>
        </div>
      </div>
      <div className="business-item__nearby-places">
        <h3>Nearby Places</h3>
        <div className="business-item__nearby-places__info"></div>
      </div>
    </div>
  );
};

export default Item;
