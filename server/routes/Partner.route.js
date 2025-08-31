import express from 'express';
import { Partnercreate, PartnerDelete, PartnerSingleDetails, Partnerupdate, PatnerIndex } from '../controller/Partner.Controller.js';

// Create a new router instance
const Partner = express.Router();


// Create the Data Register
Partner.post('/',Partnercreate);

// View the Data Register
Partner.get('/',PatnerIndex);

// View the Single Data Register
Partner.get("/:id",PartnerSingleDetails);

//Delete Data Register
Partner.delete('/:id',PartnerDelete);

//Update Data Register
Partner.put('/:id',Partnerupdate);


export default Partner;
