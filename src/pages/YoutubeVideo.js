import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7JcI3zmIM6A?si=w6kCviBQ2ardTZrH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default YouTubeVideo;
