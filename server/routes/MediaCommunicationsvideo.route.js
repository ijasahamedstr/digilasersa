import express from 'express';
import multer from 'multer';

// Create a new router instance
const MediaCommunicationsvideo = express.Router();

// Video storage configuration
const videoConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/MediaCommunications/Video');
    },
    filename: (req, file, callback) => {
        callback(null, `video-${Date.now()}.${file.originalname}`);
    }
});

// Video filter
const isVideo = (req, file, callback) => {
    if (file.mimetype.startsWith('video')) {
        callback(null, true);
    } else {
        callback(new Error('Only video files are allowed'));
    }
};

const videoUpload = multer({
    storage: videoConfig,
    fileFilter: isVideo
});

// Create the Data Register
MediaCommunicationsvideo.post('/', videoUpload.single('Video'),);


export default MediaCommunicationsvideo;
