// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark text-light p-3"style={{ color: "white",textAlign:"center",background:"black",height:"40px" }}>
      <p className="text-center m-0">
        Sign up and get 20% off on your first order.
        <Link to="/inscription" style={{color:"white" }} >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Header; 
