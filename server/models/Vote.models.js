import mongoose from 'mongoose';

// Define the schema
const VoteSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    imageNumber: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const Vote = mongoose.model('Vote', VoteSchema);

// Export the model
export default Vote;
