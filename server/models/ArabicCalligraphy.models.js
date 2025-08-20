import mongoose from 'mongoose';

// Define the schema
const ArabicCalligraphySchema = new mongoose.Schema({
    arabicCalligraphyname: {
        type: String,
    },
    arabicCalligraphyimage: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const ArabicCalligraphy = mongoose.model('ArabicCalligraphy', ArabicCalligraphySchema);

// Export the model
export default ArabicCalligraphy;
