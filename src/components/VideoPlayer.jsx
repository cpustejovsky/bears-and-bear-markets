import React, { Component } from "react";

export default class VideoPlayer extends Component {
  state = {
    videoId: "Gm3bQVANtVo",
  };

  changeVideoId = (videoId) => {
    this.setState({ videoId });
  };
  render() {
    return (
      <>
        <figure class="image is-16by9">
          <iframe
            title="nature video"
            className="has-ratio"
            src={`https://www.youtube.com/embed/${this.state.videoId}?autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </figure>
        <div className="columns">
          <div className="column is-one-third">
            <button
              onClick={() => this.changeVideoId("Gm3bQVANtVo")}
              className="button is-info is-large is-fullwidth"
            >
              Panda Bears
            </button>
          </div>
          <div className="column is-one-third">
            <button
              onClick={() => this.changeVideoId("E1b-bonBN5o")}
              className="button is-info is-large is-fullwidth"
            >
              Brown Bears
            </button>
          </div>
          <div className="column is-one-third">
            <button
              onClick={() => this.changeVideoId("2DoCgGP_0g0")}
              className="button is-info is-large is-fullwidth"
            >
              Polar Bears
            </button>
          </div>
        </div>
      </>
    );
  }
}
