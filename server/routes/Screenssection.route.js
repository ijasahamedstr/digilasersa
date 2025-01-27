import express from 'express';
import userUpload from '../multerConfig/userConfig.js';
import { ScreenssectionCreate, ScreenssectionDelete, ScreenssectionIndex, ScreenssectionSingleDetails } from '../controller/Screenssection.Controller.js';

const Screenssection = express.Router();

// Create the Data Register
Screenssection.post('/', userUpload.array('userimg'),ScreenssectionCreate);

// View the Data Register
Screenssection.get('/',ScreenssectionIndex);

// View the Single Data Register
Screenssection.get("/:id",ScreenssectionSingleDetails);

//Delete Data Register
Screenssection.delete('/:id',ScreenssectionDelete);


export default Screenssection;



