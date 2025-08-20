import express from 'express';
import multer from 'multer';
import { Partnercreate, PartnerDelete, PartnerSingleDetails, Partnerupdate, PatnerIndex } from '../controller/Partner.Controller.js';

// Create a new router instance
const Partner = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Partner');
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
Partner.post('/', upload.single('photo'),Partnercreate);

// View the Data Register
Partner.get('/',PatnerIndex);

// View the Single Data Register
Partner.get("/:id",PartnerSingleDetails);

//Delete Data Register
Partner.delete('/:id',PartnerDelete);

//Update Data Register
Partner.put('/:id',upload.single('photo'),Partnerupdate);


export default Partner;
