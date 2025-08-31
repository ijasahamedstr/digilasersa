import mongoose from 'mongoose';

// Define the schema
const PartnerSchema = new mongoose.Schema({
    partnername: {
        type: String,
    },
    partnerimagelink: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const Partner = mongoose.model('Partner', PartnerSchema);

// Export the model
export default Partner;
