import express from 'express';
import multer from 'multer';
import { MediaCommunicationvideocreate, MediaCommunicationVideoDelete, MediaCommunicationVideoIndex, MediaCommunicationVideoSingleDetails, MediaCommunicationvideoUpdates } from '../controller/MediaCommunicationsvideo.Controller.js';

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
MediaCommunicationsvideo.post('/', videoUpload.single('Video'), MediaCommunicationvideocreate);

// View the Data Register
MediaCommunicationsvideo.get('/',MediaCommunicationVideoIndex);

// View the Single Data Register
MediaCommunicationsvideo.get("/:id",MediaCommunicationVideoSingleDetails);

//Delete Data Register
MediaCommunicationsvideo.delete('/:id',MediaCommunicationVideoDelete);

//Update Data Register
MediaCommunicationsvideo.put('/:id',videoUpload.single('Video'),MediaCommunicationvideoUpdates);



export default MediaCommunicationsvideo;
