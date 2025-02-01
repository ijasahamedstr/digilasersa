import mongoose from 'mongoose';

// Define the schema
const MediaCommunicationsphotoSchema = new mongoose.Schema({
    MediaCommunicationsvideoname: {
        type: String,
    },
    MediaCommunicationsvideo: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const MediaCommunicationsvideo = mongoose.model('MediaCommunicationsphoto', MediaSchema);

// Export the model
export default MediaCommunicationsvideo;
