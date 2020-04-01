import React from "react";
import NavBar from "./NavBar";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
// import MarketStatus from "./MarketStatus";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <StockTicker />
      <VideoPlayer />
      <Footer />
      {/* <MarketStatus /> */}
    </div>
  );
};

export default App;
