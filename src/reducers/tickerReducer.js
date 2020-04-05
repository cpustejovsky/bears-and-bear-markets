const defaultTickers = [
  "FB",
  "AMZN",
  "AAPL",
  "NFLX",
  "GOOGL",
  "INTL",
  "MSFT",
  "NVDA",
  "UBER",
];
//TODO: hook up to a redux form in settings
export const tickersReducer = (state = defaultTickers, action) => {
  switch (action.type) {
    case "FETCH_TICKERS":
      return action.payload;
    default:
      return state;
  }
};