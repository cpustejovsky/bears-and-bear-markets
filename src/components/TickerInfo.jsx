import React from "react";
import { connect } from "react-redux";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
import { selectTicker } from "../actions";

const TickerInfo = ({ selectTicker, selectedTicker }) => {
  const [name, price, change, percent] = FetchStockTicker(
    selectedTicker.symbol
  );
  const renderSimilarStocks = () => {
    return selectedTicker.similar.map((company) => {
      return (
        <li>
          <a
            onClick={async () => {
              const data = await FetchTickerDetails(company);
              selectTicker(data);
            }}
          >
            {company}
          </a>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <img src={selectedTicker.logo} alt={selectedTicker.name} />
        </div>
        <div className="column is-four-quarter">{selectedTicker.name}</div>
      </div>
      <ul>
        <li>
          <strong>Current Price: </strong>
          {price}
        </li>
        <li>
          <strong>Today's Change: </strong>
          {change ? change : "N/A"}
        </li>
        <li>
          <strong>Today's Change in Percent: </strong>
          {percent ? percent : "N/A"}
        </li>
        <li>
          <strong>CEO: </strong>
          {selectedTicker.ceo}
        </li>
        <li>
          <strong>Number of Employees: </strong>
          {selectedTicker.employees}
        </li>
        <li>
          <strong>Sector: </strong>
          {selectedTicker.sector}
        </li>
        <li>
          <strong>Description: </strong>
          {selectedTicker.description}
        </li>
        <li>
          <strong>Similar Stocks: </strong>
          <ul>{renderSimilarStocks()}</ul>
        </li>
        <li>
          <strong>
            <a href={selectedTicker.url}>visit website</a>
          </strong>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, { selectTicker })(TickerInfo);
