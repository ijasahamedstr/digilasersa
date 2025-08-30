import express from 'express';
import { MediaCommunicationvideocreate, MediaCommunicationVideoDelete, MediaCommunicationVideoIndex, MediaCommunicationVideoSingleDetails, MediaCommunicationvideoUpdates } from '../controller/MediaCommunicationsvideo.Controller.js';

// Create a new router instance
const MediaCommunicationsvideo = express.Router();

// Create the Data Register
MediaCommunicationsvideo.post('/',  MediaCommunicationvideocreate);

// View the Data Register
MediaCommunicationsvideo.get('/',MediaCommunicationVideoIndex);

// View the Single Data Register
MediaCommunicationsvideo.get("/:id",MediaCommunicationVideoSingleDetails);

//Delete Data Register
MediaCommunicationsvideo.delete('/:id',MediaCommunicationVideoDelete);

//Update Data Register
MediaCommunicationsvideo.put('/:id', MediaCommunicationvideoUpdates);



export default MediaCommunicationsvideo;
