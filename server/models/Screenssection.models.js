import mongoose from 'mongoose';

const ScreenssectionSchema = new mongoose.Schema({
    projectname: {
        type: String,
    },

    projectype: {
        type: String,
    },
    
    projectdec: {
        type: String,
    },
    projectimage: {
        type: [String], // Assuming you want an array of strings. Adjust type as necessary.

    }
}, { timestamps: true });

// model
const Screenssection = mongoose.model('Screenssection', ScreenssectionSchema);

export default Screenssection;
