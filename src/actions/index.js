export const selectVideo = (videoId) => {
    return {
        type: "VIDEO_SELECTED",
        payload: videoId
    }
};

export const selectTicker = (tickerInfo) => {
    return {
        type: "TICKER_SELECTED",
        payload: tickerInfo
    }
}