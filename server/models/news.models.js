import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const NewsSchema = new mongoose.Schema({
    newsheading: {
        type: String,
    },
    newsdec: {
        type: String,
    },
    imgpath: {
        type: String,
        required: true,  // Assuming imgpath is required for each account
    },
    date: {
        type: Date,
    },

}, { timestamps: true });

// Create the model
const News = mongoose.model('News', NewsSchema);

// Export the model
export default News;
