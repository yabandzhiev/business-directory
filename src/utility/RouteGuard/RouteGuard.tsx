import { Outlet, useNavigate } from "react-router-dom";
import List from "../../components/List/List";

const RouteGuard = () => {
  useNavigate();
  const localStorageCheck = JSON.parse(
    localStorage.getItem("itemData") || "[]"
  );
  return localStorageCheck.length > 0 ? <Outlet /> : <List />;
};

export default RouteGuard;
