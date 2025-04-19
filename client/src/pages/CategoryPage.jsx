import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="category-page">
      <h2>Produits dans la catégorie : {categoryName}</h2>
      {/* Tu peux ajouter ici une liste de produits filtrés */}
    </div>
  );
};

export default CategoryPage;
