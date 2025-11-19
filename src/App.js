import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetails";
import CategoryPage from "./Pages/CategoryPage";
import CorporatePage from "./Pages/CorporatePage";

// Layout with Header + Footer
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/fruit-products/:slug"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />
        <Route
          path="/vegetable-products/:slug"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />

        <Route
          path="/category/:type"
          element={
            <MainLayout>
              <CategoryPage />
            </MainLayout>
          }
        />
        <Route
          path="/corporate/:slug"
          element={
            <MainLayout>
              <CorporatePage />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", padding: "100px 0" }}>
              404 Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
