import React from "react";
import Emart3F from "./Emart3FNo";

function Emart({ items, addDrink }) {
  return (
    <div>
      <h2>이마트</h2>
      <Emart3F items={items} addDrink={addDrink}></Emart3F>
    </div>
  );
}

export default Emart;