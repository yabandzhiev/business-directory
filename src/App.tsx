import { Routes, Route } from "react-router-dom";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import List from "./components/List/List";
import RouteGuard from "./utility/RouteGuard/RouteGuard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<RouteGuard />}>
          <Route index element={<List />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
