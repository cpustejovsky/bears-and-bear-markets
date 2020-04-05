import React, { Component } from "react";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
import TickerInfo from "./TickerInfo";

class Display extends Component {
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
        <StockTicker />
        {this.displayTickerInfo()}
      </div>
    );
  }
}

export default Display;
