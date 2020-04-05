import React, { Component } from "react";
import NavBar from "./NavBar";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
import TickerInfo from "./TickerInfo";
import Footer from "./Footer";

class App extends Component {
  state = {
    tickerInfo: false,
  };
  displayTickerInfo = () => {
    if (this.state.tickerInfo) {
      return (
        <div className="columns">
          <div className="column is-one-quarter">
            <TickerInfo />
          </div>
          <div className="column is-three-quarter">
            <VideoPlayer />
          </div>
        </div>
      );
    } else {
      return <VideoPlayer />;
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <StockTicker />
        {this.displayTickerInfo()}
        <Footer />
      </div>
    );
  }
}

export default App;
