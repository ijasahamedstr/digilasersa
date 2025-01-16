import express from 'express';
import multer from 'multer';
import { WebsiteSlidercreate, WebsiteSliderDelete, WebsiteSliderIndex } from '../controller/WebsiteSlider.Controller.js';
import { NewsSingleDetails } from '../controller/News.Controller.js';

// Create a new router instance
const WebsiteSliderrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Slider');
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
WebsiteSliderrouter.post('/', upload.single('photo'),WebsiteSlidercreate );

WebsiteSliderrouter.get('/',WebsiteSliderIndex);

WebsiteSliderrouter.delete('/:id',WebsiteSliderDelete );

WebsiteSliderrouter.put('/:id',upload.single('photo'),NewsSingleDetails);

// WebsiteSliderrouter.get("/:id",)




export default WebsiteSliderrouter;
