export const selectVideo = (videoId) => {
    return {
        type: "VIDEO_SELECTED",
        payload: videoId
    }
};