import React, { useState } from "react";
import data from "../../Products/products.json";
import { useParams } from "react-router-dom";

const Card = () => {

  const { productId } = useParams();
 // const products = product.find((products) => products.id === productId);

//hay que hacer la conversion para que lea el dato de manera de string a numero///
    
//   console.log(typeof(productId)) //este tira el dado en un string //
  const id= Number(productId) //aqui lo transformaos en un numero para que lo lea el estado//
     
  const [productsData, setProductsData] = useState(data);
    const [selectedProductId, setSelectedProductId] = useState(id);

    const handleProductSelection = (productId) => {
      setSelectedProductId(productId);
    };

    const selectedProduct = productsData.products.find(
      (product) => product.id === selectedProductId);

  return (
    <div>
      <h1>Product List</h1>

      {selectedProduct && (
        <div>
            
          <h2>Selected Product</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.title}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
