import mongoose from 'mongoose';

// Define the schema
const MediaCommunicationsphotoSchema = new mongoose.Schema({
    MediaCommunicationsphotoname: {
        type: String,
    },
    MediaCommunicationsphototype: {
        type: String,
    },
    MediaCommunicationsphotolink: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const MediaCommunicationsphoto = mongoose.model('MediaCommunicationsphoto', MediaCommunicationsphotoSchema);

// Export the model
export default MediaCommunicationsphoto;
