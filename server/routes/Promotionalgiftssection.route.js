import express from 'express';
import multer from 'multer';
import { PromotionalgiftDelete, PromotionalgiftIndex, Promotionalgiftscreate, PromotionalgiftSingleDetails, Promotionalgiftsupdate } from '../controller/Promotionalgiftssection.Controller.js';

// Create a new router instance
const Promotionalgifts = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Promotionalgifts');
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
Promotionalgifts.post('/', upload.single('photo'),Promotionalgiftscreate );

// View the Data Register
Promotionalgifts.get('/',PromotionalgiftIndex);

// View the Single Data Register
Promotionalgifts.get("/:id",PromotionalgiftSingleDetails);

//Delete Data Register
Promotionalgifts.delete('/:id',PromotionalgiftDelete);

//Update Data Register
Promotionalgifts.put('/:id',upload.single('photo'),Promotionalgiftsupdate);


export default Promotionalgifts;
