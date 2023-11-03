import React, { useState } from "react";
import VideoModal from "./VideoModal";
import mediaJSON from "./../../data/mediaData";

const VideoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (video) => {
    // console.log('Clicked video:', video);
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideo(null);
    setModalOpen(false);
  };
  console.log("modalOpen", modalOpen);
  return (
    <>
      {/* <h1>Video Gallery</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {mediaJSON.categories[0].videos.map((video, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(video)}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <p className="mt-2 text-center font-semibold">{video.title}</p>
          </div>
        ))}
        {modalOpen && <VideoModal video={activeVideo} onClose={closeModal} />}
      </div>
    </>
  );
};

export default VideoGallery;
