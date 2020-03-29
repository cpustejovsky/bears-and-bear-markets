import React from "react";
import { FetchStockTicker } from "../api/polygon";
const TickerItem = ({ symbol }) => {
  const [name, price] = FetchStockTicker(symbol);
  if (name && price) {
    return (
      <>
        <div className="ticker__tick">
          <h2>
            {name}: {price}
          </h2>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default TickerItem;
