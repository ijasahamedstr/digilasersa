import express from 'express';
import multer from 'multer';
import { Newscreate, NewsDelete, NewsIndex, NewsSingleDetails } from '../controller/News.Controller.js';

// Create a new router instance
const Newsrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/News');
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
Newsrouter.post('/', upload.single('photo'),Newscreate);

Newsrouter.get('/', NewsIndex);

Newsrouter.delete('/:id', NewsDelete);

Newsrouter.put('/:id',upload.single('photo'),NewsSingleDetails );

// Newsrouter.get("/:id", )




export default Newsrouter;
