import express from 'express';
import SocialmediaUpload from '../multerConfig/SocialmediaConfig.js';
import { SocialmediaCreate, SocialmediaDelete, SocialmediaIndex, SocialmediaSingleDetails, Socialmediaupdate } from '../controller/Socialmedia.Controller.js';

const Socialmediasection = express.Router();

// Create the Data Register
Socialmediasection.post('/',SocialmediaUpload.array('userimg'),SocialmediaCreate);

// View the Data Register
Socialmediasection.get('/',SocialmediaIndex);

// View the Single Data Register
Socialmediasection.get("/:id",SocialmediaSingleDetails);

//Delete Data Register
Socialmediasection.delete('/:id',SocialmediaDelete);

//Update Data Register
Socialmediasection.put('/:id',SocialmediaUpload.array('userimg'),Socialmediaupdate);


export default Socialmediasection;