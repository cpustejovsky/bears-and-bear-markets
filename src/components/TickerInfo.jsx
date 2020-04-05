import React, { Component } from "react";

export default class TickerInfo extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter"><img src="" alt=""/></div>
          <div className="column is-four-quarter">Company Name</div>
        </div>
        <ul>
          <li>
            <strong>Current Price:</strong>
          </li>
          <li>
            <strong>Previous Day:</strong>
          </li>
          <li>
            <strong>Today's Change:</strong>
          </li>
          <li>
            <strong>CEO:</strong>
          </li>
          <li>
            <strong>Number of Employees:</strong>
          </li>
          <li>
            <strong>Sector:</strong>
          </li>
          <li>
            <strong>Description:</strong>
          </li>
          <li>
            <strong>Similar Stocks:</strong>
          </li>
          <li>
            <strong><a href="">visit website</a></strong>
          </li>
        </ul>
      </div>
    );
  }
}
