import React, { Component } from "react";
import { connect } from "react-redux";
import StockTicker from "./StockTicker";
import VideoPlayer from "./VideoPlayer";
import TickerInfo from "./TickerInfo";

class Display extends Component {
  displayTickerInfo = () => {
    if (this.props.selectedTicker) {
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

const mapStateToProps = state => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, { })(Display);
