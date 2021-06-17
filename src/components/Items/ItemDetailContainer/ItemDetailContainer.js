import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const showProd = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=818&q=80",
            name: "Senecio peregrinus",
            stock: true,
            categ: "Cactus",
            descr:
              "Se trata de plantas muy resistentes con capacidad para almacenar agua gracias a sus hojas carnosas.",
            price: '$250',
          }),
        2000
      );
    });
  };

  useEffect(() => {
    showProd().then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <section className="detailContainer">
      <ItemDetail product={product} />
    </section>
  );
};
