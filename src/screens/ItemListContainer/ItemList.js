import React from "react";
import { Item } from "../../components/Items/Item/Item.js";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i} className="ListContainer">
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};
