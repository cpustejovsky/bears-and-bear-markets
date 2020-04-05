import { combineReducers } from "redux";
import { videosReducer, selectedVideoReducer } from "./videoReducer";
import {tickersReducer } from "./tickerReducer"


export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  tickers: tickersReducer
});
