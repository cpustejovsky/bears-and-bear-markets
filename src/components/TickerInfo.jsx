import React, { Component } from "react";
import { connect } from "react-redux";

class TickerInfo extends Component {
  renderSimilarStocks() {
    return this.props.selectedTicker.similar.map((company) => {
      return <li>{company}</li>;
    });
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter">
            <img
              src={this.props.selectedTicker.logo}
              alt={this.props.selectedTicker.name}
            />
          </div>
          <div className="column is-four-quarter">
            {this.props.selectedTicker.name}
          </div>
        </div>
        <ul>
          <li>
            <strong>Current Price:</strong>WIP
          </li>
          <li>
            <strong>Previous Day:</strong>WIP
          </li>
          <li>
            <strong>Today's Change:</strong>WIP
          </li>
          <li>
            <strong>CEO: </strong>
            {this.props.selectedTicker.ceo}
          </li>
          <li>
            <strong>Number of Employees: </strong>
            {this.props.selectedTicker.employees}
          </li>
          <li>
            <strong>Sector: </strong>
            {this.props.selectedTicker.sector}
          </li>
          <li>
            <strong>Description: </strong>
            {this.props.selectedTicker.description}
          </li>
          <li>
            <strong>Similar Stocks: </strong>
            <ul>{this.renderSimilarStocks()}</ul>
          </li>
          <li>
            <strong>
              <a href={this.props.selectedTicker.url}>visit website</a>
            </strong>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, {})(TickerInfo);
