import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Item from "./components/Item/Item";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<List />} />
        <Route path="item/*" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
