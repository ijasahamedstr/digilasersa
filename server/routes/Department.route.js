import express from 'express';
import multer from 'multer';
import { Departmentcreate, DepartmentDelete, DepartmentIndex, DepartmentSingleDetails } from '../controller/Department.Controller.js';

// Create a new router instance
const Departmentrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Department');
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

// Define the POST route with file upload and Image handler
Departmentrouter.post('/', upload.single('photo'),Departmentcreate);

Departmentrouter.get('/', DepartmentIndex);

Departmentrouter.delete('/:id',DepartmentDelete);

Departmentrouter.put('/:id',upload.single('photo'),DepartmentSingleDetails);

// Newsrouter.get("/:id", )




export default Departmentrouter;
