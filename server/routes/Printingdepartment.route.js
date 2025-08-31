import express from 'express';
import { Printingdepartmentcreate, PrintingdepartmentIndex, PrintingdepartmentSingleDelete, PrintingdepartmentSingleDetails, PrintingdepartmentUpdates } from '../controller/Printingdepartment.Controller.js';

// Create a new router instance
const Printingdepartment = express.Router();

// Create the Data Register
Printingdepartment.post('/', Printingdepartmentcreate);

// View the Data Register
Printingdepartment.get('/',PrintingdepartmentIndex);

// View the Single Data Register
Printingdepartment.get("/:id",PrintingdepartmentSingleDetails);

//Delete Data Register
Printingdepartment.delete('/:id',PrintingdepartmentSingleDelete);

//Update Data Register
Printingdepartment.put('/:id', PrintingdepartmentUpdates);


export default Printingdepartment;
