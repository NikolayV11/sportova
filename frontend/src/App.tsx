import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./componets";
import { NotFound, Cart } from "./pages";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
