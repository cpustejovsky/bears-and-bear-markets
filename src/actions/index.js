export const selectVideo = (videoId) => {
    return {
        type: "VIDEO_SELECTED",
        payload: videoId
    }
};

export const selectSingleTicker = (tickerInfo) => {
    return {
        type: "SINGLE_TICKER_SELECTED",
        payload: tickerInfo
    }
}

export const selectTickers = (type) => {
    return {
        type: "TICKERS_SELECTED",
        payload: type
    }
}