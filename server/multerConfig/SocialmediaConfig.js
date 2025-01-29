import multer from 'multer';

// Storage config
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Socialmedia');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

// Filter
const fileFilter = (req, file, callback) => {
    const allowedMimeTypes = [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/webp',
        'image/bmp',
        'image/tiff',
        'image/svg+xml'
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new Error('Only image formats allowed'), false);
    }
};

const SocialmediaUpload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export default SocialmediaUpload;
