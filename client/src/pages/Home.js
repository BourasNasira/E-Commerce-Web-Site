import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import women from "../images/women.jpg";
import man from "../images/man.jpg";
import curvy from "../images/curvy.jpg";
import sport from "../images/sport.jpg";
import robe from "../images/robe.jpg";


const categories = [
  { name: "Women", img: women },
  { name: "Man", img: man },
  { name: "Curvy", img: curvy },
  { name: "Sport", img: sport },
  { name: "Robe", img: robe },
];

const Home = () => {
  return (
    
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h2>Découvrez des vêtements qui reflètent votre personnalité</h2>
          <p>
            Explorez notre boutique en ligne et trouvez des vêtements tendance
            qui expriment votre style unique. Des pièces élégantes et modernes
            pour chaque occasion !
          </p>
          <Link to="/newarrival">
            <button className="shop-btn">Shop Now</button>
          </Link>
          <div className="stats">
            <span>
              <strong>2000+</strong> high-quality products
            </span>
            <span>
              <strong>30000+</strong> happy customers
            </span>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="model" style={{width:"400px",margin:"50px",}} />
        </div>
      </section>
      <section className="categories">
        <h3>Shop by Catégorie</h3>
        <div className="category-list">
          {categories.map((cat) => (
            <Link
              to={`/category/${cat.name.toLowerCase()}`}
              key={cat.name}
              className="category-item"
            >
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-section">
          <h4>Account</h4>
          <p>
            <a href="Login">Log In</a>
          </p>
          <p>
            <a href="Inscription">Sign Up</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Get Help</h4>
          <p>Help Center</p>
          <p>Return Policy</p>
          <p>Shipping Info</p>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <p>
            <a href="">Facebook</a>
          </p>
          <p>
            <a href="">Instagram</a>
          </p>
          <p>
            <a href="">Twitter</a>
          </p>
        </div>
        <div className="footer-section newsletter">
          <input type="email" placeholder="Email Address" />
          <button>→</button>
        </div>
        <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "10px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Do Not Sell or Share My Personal Information</p>
          <p>Sitemap Pages</p>
          <p>Sitemap Product</p>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
