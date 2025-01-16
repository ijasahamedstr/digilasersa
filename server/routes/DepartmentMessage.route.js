import express from 'express';
import multer from 'multer';
import { Departmentmessagecreate, DepartmentmessageDelete, DepartmentmessageIndex, DepartmentmessageSingleDetails } from '../controller/DepartmentMessage.Controller.js';

// Create a new router instance
const DepartmentMessagerouter = express.Router();

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
DepartmentMessagerouter.post('/', upload.single('photo'),Departmentmessagecreate);

DepartmentMessagerouter.get('/',DepartmentmessageIndex);

DepartmentMessagerouter.delete('/:id',DepartmentmessageDelete);

DepartmentMessagerouter.put('/:id',upload.single('photo'),DepartmentmessageSingleDetails);

// Newsrouter.get("/:id", )




export default DepartmentMessagerouter;
