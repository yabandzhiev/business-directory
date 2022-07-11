import { Routes, Route } from "react-router-dom";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<List />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
