import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const DepartmentmessageSchema = new mongoose.Schema({
    lecturername: {
        type: String,
    },
    lecturerdec: {
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
const Departmentmessage = mongoose.model('Departmentmessage', DepartmentmessageSchema);

// Export the model
export default Departmentmessage;
