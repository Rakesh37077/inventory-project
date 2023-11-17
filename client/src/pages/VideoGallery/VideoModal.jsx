import React from 'react';

const VideoModal = ({ video, onClose }) => {
//   console.log('Video Modal Props:', video);

  if (!video.videoUrl) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75" onClick={onClose}>
      <div className="modal-container bg-white w-1/2 md:w-1/2 mx-auto rounded shadow-lg overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          Close
        </button>
        <video controls className="w-full h-auto" src={video.videoUrl} autoPlay />
        <p className="text-center my-4">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoModal;
