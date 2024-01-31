import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./componets";
import { NotFound, Cart, Home } from "./pages";
import { useSelector } from "react-redux";
import { selectCount } from "./redux/catalog";
function App() {
  const count = useSelector(selectCount);
  console.log(count);
  return (
    <div className="App">
      <Header />
      <div className={`${count ? "block_on" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
