import React from "react";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
const TickerItem = ({ symbol }) => {
  const [name, price] = FetchStockTicker(symbol);

  if (name && price) {
    return (
      <>
        <div className="ticker__tick" onClick={async()=> {
          const data = await FetchTickerDetails(name)
          console.log(data)
        }}>
          <h1>
            {name}: {price}
          </h1>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default TickerItem;
