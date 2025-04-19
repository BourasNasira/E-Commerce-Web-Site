import React from 'react';
// import './HeroSection.css';
import heroImg from '../assets/hero.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Découvrez des vêtements qui reflètent votre personnalité</h2>
        <p>
          Explorez notre boutique en ligne et trouvez des vêtements tendance
          qui expriment votre style unique. Des pièces élégantes et modernes
          pour chaque occasion !
        </p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="fashion model" />
      </div>
    </section>
  );
};

export default HeroSection;
