const defaultTickers = {
  faang: ["FB", "AMZN", "AAPL", "NFLX", "GOOGL"],
  otherTech: ["INTL", "MSFT", "NVDA", "UBER", "LYFT"],
  auto: ["TSLA", "TM", "HMC", "GM", "F"],
};
//TODO: hook up to a redux form in settings
export const tickersReducer = (state="faang", action) => {
  switch (action.type) {
    case "TICKERS_SELECTED":
      return defaultTickers[action.payload];
    default:
      return defaultTickers[state];
  }
};

export const selectedTickerReducer = (state = null, action) => {
  switch (action.type) {
    case "SINGLE_TICKER_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
