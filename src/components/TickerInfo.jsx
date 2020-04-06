import React from "react";
import { connect } from "react-redux";
import { FetchStockTicker, FetchTickerDetails } from "../api/polygon";
import { selectSingleTicker } from "../actions";

const TickerInfo = ({ selectSingleTicker, selectedTicker }) => {
  const [name, price, change, percent] = FetchStockTicker(
    selectedTicker.symbol
  );
  const renderSimilarStocks = () => {
    return selectedTicker.similar.map((company) => {
      return (
        <a
          className="list-item"
          onClick={async () => {
            const data = await FetchTickerDetails(company);
            selectSingleTicker(data);
          }}
        >
          {company}
        </a>
      );
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div class="media-left">
              <figure className="image is-48x48">
                <img src={selectedTicker.logo} alt={selectedTicker.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="title is-2">
                <a href={selectedTicker.website}>{selectedTicker.name}</a>
              </div>
            </div>
          </div>
          <div className="content">
            <p>
              <strong>Current Price: </strong>
              ${price}
            </p>

            <p>
              {" "}
              <strong>Today's Change: </strong>
              {change ? change : "N/A"}
            </p>

            <p>
              {" "}
              <strong>Today's Change in Percent: </strong>
              {percent ? percent : "N/A"}
            </p>

            <p>
              {" "}
              <strong>CEO: </strong>
              {selectedTicker.ceo}
            </p>
            <p>
              <strong>Number of Employees: </strong>
              {selectedTicker.employees}
            </p>
            <p>
              <strong>Sector: </strong>
              {selectedTicker.sector}
            </p>

            <p>
              {" "}
              <strong>Description: </strong>
              {selectedTicker.description}
            </p>

            <div>
              {" "}
              <strong>Similar Stocks: </strong>
              {renderSimilarStocks()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, { selectSingleTicker })(TickerInfo);
