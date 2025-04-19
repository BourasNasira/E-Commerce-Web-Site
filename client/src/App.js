import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Home from "./pages/Home";
import About from "./pages/About";
import NewArrival from "./pages/NewArrival";
import Contact from "./pages/Contact";
import Header from "./components/Header";

import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <nav className="navbar">
          <div className="nav">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
            <NavLink
              to="/newarrival"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              New Arrival
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </div>

          <p className="logo">SHOPIRA</p>

          <div className="nav">
            <Link to="/recherche" className="icons">
              <CiSearch />
            </Link>
            <Link to="/panier" className="icons">
              <TiShoppingCart />
            </Link>
            <Link to="/login" className="icons">
              <FaUser />
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newarrival" element={<NewArrival />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
