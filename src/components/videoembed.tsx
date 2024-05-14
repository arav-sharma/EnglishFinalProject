import React from 'react';

const VideoEmbed = () => {
  return (
    <div className="relative pb-9/16 h-0 overflow-hidden max-w-full bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/hJP5GqnTrNo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Sal Khan's TED Talk on AI in Education"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;