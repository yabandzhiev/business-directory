import { useLocation } from "react-router-dom";
import "./Item.scss";
import { businessProps } from "../../types/businessTypes";

const Item = () => {
  const { state }: any = useLocation();

  const business: businessProps = state.business;

  return <div>{business.description}</div>;
};

export default Item;
