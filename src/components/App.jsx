import React from "react";
import NavBar from "./NavBar";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
import MarketStatus from "./MarketStatus";
import CtaButton from "./CtaButton";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <StockTicker />
      <VideoPlayer />
      <CtaButton />
      {/* <MarketStatus /> */}
    </div>
  );
};

export default App;
