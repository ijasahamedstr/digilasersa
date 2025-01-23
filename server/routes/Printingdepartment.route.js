import express from 'express';
import multer from 'multer';
import { Printingdepartmentcreate, PrintingdepartmentIndex, PrintingdepartmentSingleDelete, PrintingdepartmentSingleDetails, PrintingdepartmentUpdates } from '../controller/Printingdepartment.Controller.js';

// Create a new router instance
const Printingdepartment = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Printingdepartment');
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
Printingdepartment.post('/', upload.single('photo'),Printingdepartmentcreate);

// View the Data Register
Printingdepartment.get('/',PrintingdepartmentIndex);

// View the Single Data Register
Printingdepartment.get("/:id",PrintingdepartmentSingleDetails);

//Delete Data Register
Printingdepartment.delete('/:id',PrintingdepartmentSingleDelete);

//Update Data Register
Printingdepartment.put('/:id',upload.single('photo'),PrintingdepartmentUpdates);


export default Printingdepartment;
