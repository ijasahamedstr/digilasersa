import express from 'express';
import multer from 'multer';
import { MediaCommunicationcreate, MediaCommunicationIndex, MediaCommunicationSingleDelete, MediaCommunicationSingleDetails, MediaCommunicationUpdates } from '../controller/MediaCommunicationsphoto.Controller.js';

// Create a new router instance
const MediaCommunicationsphoto = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/MediaCommunications/Photo');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

// Image filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(new Error('Only images are allowed'));
    }
};

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

// Create the Data Register
MediaCommunicationsphoto.post('/', upload.single('photo'),MediaCommunicationcreate);

// View the Data Register
MediaCommunicationsphoto.get('/',MediaCommunicationIndex);

// View the Single Data Register
MediaCommunicationsphoto.get("/:id",MediaCommunicationSingleDetails);

//Delete Data Register
MediaCommunicationsphoto.delete('/:id',MediaCommunicationSingleDelete);

//Update Data Register
MediaCommunicationsphoto.put('/:id',upload.single('photo'),MediaCommunicationUpdates);


export default MediaCommunicationsphoto;
