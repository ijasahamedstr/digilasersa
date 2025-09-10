import mongoose from 'mongoose';

// Define the schema
const NewsSchema = new mongoose.Schema({
    newsname: {
        type: String,
    },
    newsdec: {
        type: String,
    },
    newsimagelinks: {
    type: [String] // <-- Fix: array of strings
    },
    date: {
        type: Date
    }
});

// Create the model
const News = mongoose.model('News', NewsSchema);

// Export the model
export default News;
