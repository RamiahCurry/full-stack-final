import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  // Ensuring the video loops and autoplays by adding the `playlist` parameter equal to `videoId`
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1`;

  return (
    <div>
      <iframe
        width="100%" // Setting width to 100% for responsiveness
        height="100%" // You can adjust height as needed or use CSS to make it responsive
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
