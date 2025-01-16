import express from 'express';
import multer from 'multer';
import { Teamcreate, TeamDelete, TeamIndex, TeamSingleDetails } from '../controller/Team.Controller.js';

// Create a new router instance
const Teamrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Team');
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
Teamrouter.post('/', upload.single('photo'),Teamcreate);

Teamrouter.get('/',TeamIndex);

Teamrouter.delete('/:id',TeamDelete);

Teamrouter.put('/:id',upload.single('photo'),TeamSingleDetails);

// Newsrouter.get("/:id", )




export default Teamrouter;
