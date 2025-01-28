import express from 'express';
import multer from 'multer';
import { ArabicCalligraphycreate, ArabicCalligraphyDelete, ArabicCalligraphyIndex, ArabicCalligraphySingleDetails, ArabicCalligraphyupdate } from '../controller/ArabicCalligraphy.Controller.js';

// Create a new router instance
const ArabicCalligraphy = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/ArabicCalligraphy');
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
ArabicCalligraphy.post('/', upload.single('photo'),ArabicCalligraphycreate );

// View the Data Register
ArabicCalligraphy.get('/',ArabicCalligraphyIndex);

// View the Single Data Register
ArabicCalligraphy.get("/:id",ArabicCalligraphySingleDetails);

//Delete Data Register
ArabicCalligraphy.delete('/:id',ArabicCalligraphyDelete);

//Update Data Register
ArabicCalligraphy.put('/:id',upload.single('photo'),ArabicCalligraphyupdate);


export default ArabicCalligraphy;
