import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../services/Firebase/firebase.js";
import { Loader } from "../../components/Loader/Loader.js";
import { ItemDetail } from "./ItemDetail.js";
import { EmptyPageComponent } from "../../components/EmptyPageComponent/EmptyPageComponent.js";
import { Footer } from "../../components/Footer/Footer.js";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [docExists, setDocExists] = useState(true);
  const [prodById, setProdById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    const item = itemCollection.doc(id);

    item.get().then((doc) => {
      if (!doc.exists) {
        setDocExists(false);
      }
      setProdById({ id: doc.id, ...doc.data() });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>
      <section className="detailContainer">
        {Object.keys(prodById).length === 0 ? (
          <div className="LoaderContainer">
            <Loader />
          </div>
        ) : docExists ? (
          <ItemDetail product={prodById} />
        ) : (
          <EmptyPageComponent
            className="emptyCart"
            imgUrl="https://i.ibb.co/m9GFpqH/Artboard-1-2x.png"
            altText="item no encontrado"
            h1="Oops, ese producto no existe"
            link="/"
            btnText="Volver al Home"
          />
        )}
      </section>

      <Footer />
    </>
};
