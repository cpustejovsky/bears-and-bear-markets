import React from "react";
import NavBar from "./NavBar";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <StockTicker />
      <VideoPlayer />
    </div>
  );
};

export default App;
