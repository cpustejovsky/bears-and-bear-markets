const defaultTickers = {
  faang: ["FB", "AMZN", "AAPL", "NFLX", "GOOGL"],
  otherTech: ["INTL", "MSFT", "NVDA", "UBER", "LYFT"],
  auto: ["TSLA", "TM", "HMC", "GM", "F"],
};
//TODO: hook up to a redux form in settings
export const tickersReducer = (state = defaultTickers.auto, action) => {
  switch (action.type) {
    case "FETCH_TICKERS":
      return action.payload;
    default:
      return state;
  }
};

export const selectedTickerReducer = (state = null, action) => {
  switch (action.type) {
    case "TICKER_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
