import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../services/Firebase/firebase.js";
import { ItemList } from "./ItemList.js";
import { Loader } from "../../components/Loader/Loader.js";
import { Footer } from "../../components/Footer/Footer.js";

import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = dataBase.collection("items");

    itemCollection.get().then((response) => {
      if (response.size === 0) {
        console.log("no results");
      } else {
        if (id === undefined) {
          const itemsDB = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setItems(itemsDB);
        } else {
          const filteredCollection = itemCollection.where("category", "==", id);
          filteredCollection.get().then((response) => {
            const filteredItems = response.docs.map((element) => {
              return { ...element.data(), id: element.id };
            });
            setItems(filteredItems);
          });
        }
      }
    });
  }, [id]);

  return <>
      <div className="itemListContainer">
        <section>
          <h1>Tu Planta Ideal</h1>
          <p>
            Encontra la planta que buscas segun las condiciones de tu espacio,
            <br></br> filtra por tipo, especie y necesidad
          </p>
        </section>
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <div className="LoaderContainer">
            <Loader />
          </div>
        )}
      </div>
      <Footer />
    </>
};
