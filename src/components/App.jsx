import React from "react";
import NavBar from "./NavBar";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
import MarketStatus from "./MarketStatus";
const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <StockTicker />
      <VideoPlayer />
      <MarketStatus />
    </div>
  );
};

export default App;
