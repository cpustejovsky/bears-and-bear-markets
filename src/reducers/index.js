import { combineReducers } from "redux";



const displayVideos = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

const selectSingleVideo = (state = null, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
    videos: displayVideos,
    video: selectSingleVideo
})