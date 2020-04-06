import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSingleTicker, selectTickers } from "../actions";
import history from "../history";
import { FetchTickerDetails } from "../api/polygon";
class Settings extends Component {
  state = {
    term: "",
    data: {},
    error: null,
  };
  changeDefaultTickers = (event) => {
    this.props.selectTickers(event.target.value);
  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  searchStockSymbol = async () => {
    console.log(this.state.term);
    const data = await FetchTickerDetails(this.state.term);
    if (data === "error") {
      this.setState({
        error: "Sorry, your search did not return anything. Please try again",
      });
    } else {
      this.setState({
        error: null,
      });
      this.setState({ data: data });
    }
  };
  renderSearchedStock() {
    return (
      <a
        onClick={() => {
          this.props.selectSingleTicker(this.state.data);
          history.push("/")
        }}
      >
        {this.state.data.name}
      </a>
    );
  }
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
                  onChange={this.onInputChange}
                />
              </div>
              <div className="control">
                <a
                  className="button is-success"
                  onClick={this.searchStockSymbol}
                >
                  Search
                </a>
              </div>
            </div>
            {this.state.data.name ? this.renderSearchedStock() : null}
            {this.state.error ? this.state.error : null}
            <div className="margin-top" />
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

export default connect(mapStateToProps, { selectSingleTicker, selectTickers })(Settings);
