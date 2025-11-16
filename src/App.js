import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetails";
import CategoryPage from "./Pages/CategoryPage";
import CorporatePage from "./Pages/CorporatePage";
import ContactPage from "./Pages/ContactPage";

function AppWrapper() {
  const location = useLocation();

  // Hide header/footer only on Contact and 404 pages
  const hideHeaderFooter =
    location.pathname === "/contact" || location.pathname === "/404";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products/:type" element={<CategoryPage />} />
          <Route path="/corporate/:slug" element={<CorporatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback 404 text */}
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", padding: "100px 0" }}>
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
