import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./componets";
import { NotFound, Cart, Home, Category, ProductCatalog } from "./pages";
import { useSelector } from "react-redux";
import { selectCount } from "./redux/catalog";
function App() {
  const count = useSelector(selectCount);
  return (
    <div className="App">
      <Header />
      <div className={`${count ? "block_on" : ""} main_pages`}>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <p>загрузка</p>
                  </div>
                }>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/category"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <p>загрузка</p>
                  </div>
                }>
                <Category />
              </React.Suspense>
            }
          />
          <Route
            path="/d"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <p>загрузка</p>
                  </div>
                }>
                <ProductCatalog />
              </React.Suspense>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
