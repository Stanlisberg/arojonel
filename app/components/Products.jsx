import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:3003/product");
  return res.json();
};

async function Products() {
  const products = await getProducts();
  console.log(products);
  return(
    <div>
      {products.map((product, index) => (
        <div key={index}>
          {product.id}
        </div>
      ))}
    </div>
  )
}

export default Products;
