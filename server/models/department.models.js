import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const DepartmentSchema = new mongoose.Schema({
    department: {
        type: String,
    },
    departmentdec: {
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
const Department = mongoose.model('Department', DepartmentSchema);

// Export the model
export default Department;
