import React from "react";
import TickerItem from "./TickerItem";
export default function StockTicker() {
  return (
    <div className="ticker">
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"AAPL"} />
    </div>
  );
}
