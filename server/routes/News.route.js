import express from 'express';
import multer from 'multer';
import { Newscreate, NewsDelete, NewsIndex, NewsSingleDetails, Newsupdate } from '../controller/News.Controller.js';

// Create a new router instance
const Newssection = express.Router();

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

// Create the Data Register
Newssection.post('/', upload.single('photo'),Newscreate );

// View the Data Register
Newssection.get('/',NewsIndex);

// View the Single Data Register
Newssection.get("/:id",NewsSingleDetails);

//Delete Data Register
Newssection.delete('/:id',NewsDelete);

//Update Data Register
Newssection.put('/:id',upload.single('photo'),Newsupdate);


export default Newssection;
