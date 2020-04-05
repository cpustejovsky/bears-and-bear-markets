import React, { Component } from "react";
import { connect } from "react-redux";
import TickerItem from "./TickerItem";
class StockTicker extends Component {
  renderTickers(){
    return this.props.tickers.map(ticker =>{
      return <TickerItem symbol={ticker} />

    })
  }
  render() {
    return (
      <div className="ticker">
        {this.renderTickers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tickers: state.tickers };
};

export default connect(mapStateToProps, { })(StockTicker);
