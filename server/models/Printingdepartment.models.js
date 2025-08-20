import mongoose from 'mongoose';

// Define the schema
const PrintingdepartmentSchema = new mongoose.Schema({
    Printingname: {
        type: String,
    },
    Printingtype: {
        type: String,
    },
    Printingimage: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const Printingdepartment = mongoose.model('Printingdepartment', PrintingdepartmentSchema);

// Export the model
export default Printingdepartment;
