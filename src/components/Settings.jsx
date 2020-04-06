import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTickers } from "../actions";
import history from "../history";

class Settings extends Component {
  state = {
    term: "",
  };
  changeDefaultTickers = (event) => {
    this.props.selectTickers(event.target.value);
  };
  render() {
    return (
      <div className="container margin-top">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title">Settings</h1>
            <div className="field">
              <label className="label">Select Default Tickers</label>
              <div className="control">
                <div className="select">
                  <select onChange={this.changeDefaultTickers}>
                    <option value="faang">FAANG</option>
                    <option value="otherTech">Other Tech Companies</option>
                    <option value="auto">Automotive Companies</option>
                  </select>
                </div>
              </div>
            </div>
            <label className="label">
              Search for Stock or Exchange by Symbol
            </label>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="AAPL"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
              </div>
              <div class="control">
                <a class="button is-success">Search</a>
              </div>
            </div>
            <div className="divider"/>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Submit
                </button>
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
