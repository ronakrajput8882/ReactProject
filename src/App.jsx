 import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import AdminDashboard from "./components/AdminDashboard";

// Inside your <Routes> block


function App() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Pages that should NOT show Header/Footer
  const hideLayout = ["/", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header search={search} setSearch={setSearch} />}

      <main className="min-h-[80vh] p-4">
        <Routes>
          {/* Auth */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList search={search} />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Redirect /home → if logged in */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
