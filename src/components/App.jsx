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
      <div className="container">
        <MarketStatus/>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default App;
