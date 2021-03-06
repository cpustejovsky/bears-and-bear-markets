let defaultArray = [
  { name: "Pandas Bears", id: "Gm3bQVANtVo" },
  { name: "Brown Bears", id: "E1b-bonBN5o" },
  { name: "Polar Bears", id: "2DoCgGP_0g0" },
];

export const videosReducer = () => {
  return defaultArray;
};

export const selectedVideoReducer = (selectedVideo = defaultArray[0], action) => {
  if (action.type === "VIDEO_SELECTED") {
    return action.payload;
  } else {
    return selectedVideo;
  }
};