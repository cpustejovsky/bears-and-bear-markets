import React, { useState, useEffect } from "react";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
const TickerItem = ({ symbol }) => {
  const [name, price, change, percent] = FetchStockTicker(symbol);
  const [color, setColor] = useState("ticker__tick__display");
  const setTickerColor = () => {
    if (change < 0) {
      setColor("ticker__tick__display__negative");
    } else {
      setColor("ticker__tick__display__positive");
    }
  };
  useEffect(() => {
    setTickerColor();
  }, [change]);
  const renderPercent = () => {
    if (percent !== 0) {
      return <>{name}: {price} ({percent}%)</>  
    } else {
      return <>{name}: {price}</>  
    }
  };
  if (name && price) {
    return (
      <>
        <div
          className="ticker__tick"
          onClick={async () => {
            const data = await FetchTickerDetails(name);
            console.log(data);
          }}
        >
          <h1 className={color}>
            {renderPercent()}
          </h1>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default TickerItem;
