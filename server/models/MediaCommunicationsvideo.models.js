import mongoose from 'mongoose';

// Define the schema
const MediaCommunicationsvideoSchema = new mongoose.Schema({
    MediaCommunicationsvideoname: {
        type: String,
    },
    MediaCommunicationsvideo: {
        type: String,
    },
    MediaCommunicationsvideotype: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const MediaCommunicationsvideo = mongoose.model('MediaCommunicationsvideo', MediaCommunicationsvideoSchema);

// Export the model
export default MediaCommunicationsvideo;
