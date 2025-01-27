import moment from 'moment';
import Printingdepartment from '../models/Printingdepartment.models.js';

export const Printingdepartmentcreate = async (req, res) => {
    const { filename } = req.file;
    const { Printingname, Printingtype } = req.body;

    // Input validation
    if (!Printingname || !Printingtype || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide gift name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newPrinting = new Printingdepartment({
            Printingname,
            Printingtype,
            Printingimage: filename,
            date,
        });

        const savedPrinting = await newPrinting.save();

        res.status(201).json({
            status: 201,
            message: 'Printing Section created successfully.',
            data: savedPrinting,
        });
    } catch (error) {
        console.error('Error creating promotional gift:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error. Could not create the promotional gift.',
            error: error.message,
        });
    }
};

// All Acccount View 
export const PrintingdepartmentIndex = async (req, res) => {
    try {
        const Printingdepartview = await Printingdepartment.find();
        res.json(Printingdepartview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const PrintingdepartmentSingleDetails = async (req, res) => {
    try {
        const PrintingdepartSingleView = await Printingdepartment.findById(req.params.id);
        if (PrintingdepartSingleView  == null) {
            return res.status(404).json({ message: "Cannot Find The Printing department" });
        }
        else {
            res.json(PrintingdepartSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const  PrintingdepartmentSingleDelete = async (req, res) => {
    const PrintingdepartId =  req.params.id;

    try {
         await Printingdepartment.deleteOne({_id: PrintingdepartId})
         res.json({message:"User Promotionalgifts deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update
export const PrintingdepartmentUpdates  = async (req, res) => {
    const { id } = req.params;
    const { Printingname } = req.body;
    const { Printingtype } = req.body;
    const { file } = req;

    try {
        // Find the user by ID
        const user = await Printingdepartment.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        // Update user details
        if (Printingname) {
            user.Printingname = Printingname;
        }
        if (Printingtype) {
            user.Printingtype = Printingtype;
        }
        // Update image if a new file is uploaded
        if (file) {
            user.Printingimage = file.filename;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};
