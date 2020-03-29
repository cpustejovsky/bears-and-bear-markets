import React from "react";
import TickerItem from "./TickerItem";
export default function StockTicker() {
  return (
    <div className="ticker">
      <TickerItem symbol={"FB"} />
      <TickerItem symbol={"AMZN"} />
      <TickerItem symbol={"AAPL"} />
      <TickerItem symbol={"NFLX"} />
      <TickerItem symbol={"GOOGL"} />
      <TickerItem symbol={"INTL"} />
      <TickerItem symbol={"MSFT"} />
      <TickerItem symbol={"NVDA"} />
      <TickerItem symbol={"UBER"} />

    </div>
  );
}
