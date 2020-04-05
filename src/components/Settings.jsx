import React, { Component } from "react";

export default class Settings extends Component {
  render() {
    return (
      <div className="container margin-top">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title">Settings</h1>
            <h1 className="subtitle">Currently a work in progress (WIP)</h1>
            <div className="field">
              <label className="label">Select Default Tickers</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>FAANG</option>
                    <option>Other Tech Companies</option>
                    <option>Major Exchanges</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">
                Search for Stock or Exchange by Symbol
              </label>
              <div className="control">
                <input className="input" type="text" placeholder="AAPL" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button className="button is-primary is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
