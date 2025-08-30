import express from 'express';
import { MediaCommunicationcreate, MediaCommunicationIndex, MediaCommunicationSingleDelete, MediaCommunicationSingleDetails, MediaCommunicationUpdates } from '../controller/MediaCommunicationsphoto.Controller.js';

// Create a new router instance
const MediaCommunicationsphoto = express.Router();

// Create the Data Register
MediaCommunicationsphoto.post('/',MediaCommunicationcreate);

// View the Data Register
MediaCommunicationsphoto.get('/',MediaCommunicationIndex);

// View the Single Data Register
MediaCommunicationsphoto.get("/:id",MediaCommunicationSingleDetails);

//Delete Data Register
MediaCommunicationsphoto.delete('/:id',MediaCommunicationSingleDelete);

//Update Data Register
MediaCommunicationsphoto.put('/:id' ,MediaCommunicationUpdates);


export default MediaCommunicationsphoto;
