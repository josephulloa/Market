import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../Products/products.json";
import Pagination from "./Pagination";

const ProdutsPage = () => {
  const pagesize = 5;
  const [pagina, setPagina] = useState(0);

  return (
    <div className="products">
      <ul>
        {products.products
          .slice(pagina * pagesize, pagina * pagesize + pagesize)
          .map((product) => {
            return (
              <li key={product.id}>
                <Link
                  className="underline"
                  to={`/detailsproduct/${product.id}`}
                >
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
      <div>
        <Pagination pagina={pagina} setPagina={setPagina} />
      </div>
    </div>
  );
};

export default ProdutsPage;
