import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const WebsiteSliderSchema = new mongoose.Schema({
    imgpath: {
        type: String,
        required: true,  // Assuming imgpath is required for each account
    },
    date: {
        type: Date,
    },

}, { timestamps: true });

// Create the model
const WebsiteSlider = mongoose.model('WebsiteSlider', WebsiteSliderSchema);

// Export the model
export default WebsiteSlider;
