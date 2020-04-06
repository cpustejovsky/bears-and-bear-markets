import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
import { selectSingleTicker } from "../actions";
const TickerItem = (props) => {
  const [name, price, change, percent] = FetchStockTicker(props.symbol);
  const [color, setColor] = useState("ticker__tick__display");
  const setTickerColor = () => {
    if (change < 0) {
      setColor("ticker__tick__display__negative");
    } else if (change > 0) {
      setColor("ticker__tick__display__positive");
    }
  };
  useEffect(() => {
    setTickerColor();
  }, [change]);
  const renderPercent = () => {
    if (percent) {
      return (
        <>
          {name}: ${price} ({percent}%)
        </>
      );
    } else {
      return (
        <>
          {name}: ${price}
        </>
      );
    }
  };
  if (name && price) {
    return (
      <>
        <div
          className="ticker__tick"
          onClick={async () => {
            const data = await FetchTickerDetails(name);
            if (props.selectedTicker !== null) {
              if (data.name === props.selectedTicker.name) {
                props.selectSingleTicker(null);
              } else {
                props.selectSingleTicker(data);
              }
            } else {
              props.selectSingleTicker(data);
            }
          }}
        >
          <h1 className={color}>{renderPercent()}</h1>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, { selectSingleTicker })(TickerItem);
