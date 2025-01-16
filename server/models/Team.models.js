import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const TeamSchema = new mongoose.Schema({
    teamname: {
        type: String,
    },
    teamposstion: {
        type: String,
    },
    teamdec: {
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
const Team = mongoose.model('Team', TeamSchema);

// Export the model
export default Team;
