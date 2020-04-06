const defaultTickers = {
  faang: ["FB", "AMZN", "AAPL", "NFLX", "GOOGL"],
  otherTech: ["INTL", "MSFT", "NVDA", "UBER", "LYFT"],
  auto: ["TSLA", "TM", "HMC", "GM", "F"],
};
//TODO: hook up to a redux form in settings
export const tickersReducer = (state=defaultTickers.faang, action) => {
  switch (action.type) {
    case "TICKERS_SELECTED":
      return defaultTickers[action.payload];
    default:
      return state;
  }
};

export const selectedTickerReducer = (state = null, action) => {
  switch (action.type) {
    case "SINGLE_TICKER_SELECTED":
      console.log("is this being hit?")
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};
