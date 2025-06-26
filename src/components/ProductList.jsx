import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-grid">
      {filteredProducts.map((product) => (
      <ProductItem key={product.id} product={product} />
  ))}
</div>

    </div>
  );
};

export default ProductList;
