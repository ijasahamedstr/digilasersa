import express from 'express';
import userUpload from '../multerConfig/userConfig.js';

const Socialmediasection = express.Router();

// Create the Data Register
Socialmediasection.post('/', userUpload.array('userimg'),ScreenssectionCreate);

// View the Data Register
Socialmediasection.get('/',ScreenssectionIndex);

// View the Single Data Register
Socialmediasection.get("/:id",ScreenssectionSingleDetails);

//Delete Data Register
Socialmediasection.delete('/:id',ScreenssectionDelete);


export default Socialmediasection;