import React, { useState, useEffect } from "react";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
const TickerItem = ({ symbol }) => {
  const [name, price, change, percent] = FetchStockTicker(symbol);
  const [color, setColor] = useState("ticker__tick__display")
  const setTickerColor = () => {
    if (change < 0){
      setColor("ticker__tick__display__negative")
    } else {
      setColor("ticker__tick__display__positive")
    }
  }
  useEffect(() => {
    setTickerColor()
  }, [change])
  if (name && price) {
    console.log(typeof(change))
    console.log(typeof(percent))
    return (
      <>
        <div className="ticker__tick" onClick={async()=> {
          const data = await FetchTickerDetails(name)
          console.log(data)
        }}>
          <h1 className={color}>
            {name}: {price} ({percent}%)
          </h1>
          {/* <p className={color}>
            {change}
          </p> */}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default TickerItem;
