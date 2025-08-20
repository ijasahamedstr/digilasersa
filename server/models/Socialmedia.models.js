import mongoose from 'mongoose';

const SocialmediaSchema = new mongoose.Schema({
    soicalmedianame: {
        type: String,
    },

    soicalmediamaintype: {
        type: String,
    },
    
    soicalmediasubtype: {
        type: String,
    },
    Soicalmediaimage: {
        type: [String], // Assuming you want an array of strings. Adjust type as necessary.

    }
}, { timestamps: true });

// model
const Socialmedia = mongoose.model('Socialmedia', SocialmediaSchema);

export default Socialmedia;
