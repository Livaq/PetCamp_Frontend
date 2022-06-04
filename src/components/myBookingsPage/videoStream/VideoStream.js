import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@mui/material';

const VideoStream = ({ videoLink, isVideoOpen, setIsVideoOpen }) => (
  <Dialog
    open={isVideoOpen}
    onClose={() => setIsVideoOpen(false)}
    maxWidth="xl"
  >
    <iframe
      width={750}
      height={450}
      src={videoLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Dialog>
);

VideoStream.propTypes = {
  videoLink: PropTypes.string.isRequired,
  isVideoOpen: PropTypes.bool.isRequired,
  setIsVideoOpen: PropTypes.func.isRequired,
};

export default VideoStream;
