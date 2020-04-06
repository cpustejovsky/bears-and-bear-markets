import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTickers } from "../actions";

class Settings extends Component {
  change = (event) => {
    this.props.selectTickers(event.target.value);
  }
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
                  <select onChange={this.change}>
                    <option value="faang">FAANG</option>
                    <option value="otherTech">Other Tech Companies</option>
                    <option value="auto">Automotive Companies</option>
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

const mapStateToProps = (state) => {
  return { selectedTicker: state.selectedTicker };
};

export default connect(mapStateToProps, { selectTickers })(Settings);
