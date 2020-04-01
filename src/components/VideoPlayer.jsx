import React, { Component } from "react";

export default class VideoPlayer extends Component {
  render() {
    return (
      <figure class="image is-16by9">
        <iframe
          title="nature video"
          className="has-ratio"
          src="https://www.youtube.com/embed/Gm3bQVANtVo?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>
    );
  }
}
