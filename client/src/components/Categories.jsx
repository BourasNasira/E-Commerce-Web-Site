import React from 'react';
import womanImg from '../images/women.jpg';
import manImg from '../images/man.jpg';
import curvyImg from '../images/curvy.jpg';
import sportImg from '../images/sport.jpg';
import robeImg from '../images/robe.jpg';

const categories = [
  { name: 'Women', img: womanImg },
  { name: 'Man', img: manImg },
  { name: 'Curvy', img: curvyImg },
  { name: 'Sport', img: sportImg },
  { name: 'Robe', img: robeImg },
];

const Categories = () => {
  return (
    <section className="categories">
      <h3>Shop by Catégorie</h3>
      <div className="category-list">
        {categories.map((cat) => (
          <div key={cat.name} className="category-item">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
