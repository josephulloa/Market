import React from "react";
import "./styles.css";
import products from "../../Products/products.json";
import { Link } from "react-router-dom";


const ProdutsPage = () => {
  return (
    <div className="products">
        <ul>
          {products.products.slice().map((product) => {
            return( <li key={product.id}>
                <Link to={`/detailsproduct/${product.id}`}> 
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> ${product.price}
                </div>
                
                  <div>
                    <button>🛒</button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default ProdutsPage;
