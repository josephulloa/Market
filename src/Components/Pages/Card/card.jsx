import React, { useState } from "react";
import data from "../../Products/products.json";


const Card = () => {
  const [products, setProducts] = useState(data);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelection = (productId) => {
    setSelectedProductId(productId);
  };

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => handleProductSelection(product.id)}>
              Select
            </button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>Selected Product</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.name}</p>
          {/ Render other properties */}
        </div>
      )}
    </div>
  );
};

export default Card;
