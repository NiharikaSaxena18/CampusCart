import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
  const { products, loading, error, refreshProducts } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;