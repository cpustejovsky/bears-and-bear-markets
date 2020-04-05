import React, { Component } from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";
class VideoPlayer extends Component {
  changeVideoId = (videoId) => {
    this.setState({ videoId });
  };
  renderButtons() {
    return this.props.videos.map((video) => {
      return (
        <div className="column">
          <button
            onClick={() => this.props.selectVideo(video)}
            className="button is-info is-large is-fullwidth"
          >
            {video.name}
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <>
        <figure class="image is-16by9">
          <iframe
            title="nature video"
            className="has-ratio"
            src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}?autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </figure>
        <div className="columns">
          {this.renderButtons()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos, selectedVideo: state.selectedVideo };
};

export default connect(mapStateToProps, { selectVideo })(VideoPlayer);
