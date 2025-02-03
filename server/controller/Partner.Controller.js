import moment from 'moment';
import Partner from '../models/Partner.models.js';

export const Partnercreate = async (req, res) => {
    const { filename } = req.file;
    const { partnername } = req.body;

    // Input validation
    if (!partnername || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide Patner name, and Patner image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newPatner = new Partner({
            partnername,
            partnerimage: filename,
            date,
        });

        const savedPatner = await newPatner.save();

        res.status(201).json({
            status: 201,
            message: 'Promotional Patner created successfully.',
            data: savedPatner,
        });
    } catch (error) {
        console.error('Error creating Patner :', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error. Could not create the Patner.',
            error: error.message,
        });
    }
};

// All Acccount View 
export const PatnerIndex = async (req, res) => {
    try {
        const Partnerview = await Partner.find();
        res.json(Partnerview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const PartnerSingleDetails = async (req, res) => {
    try {
        const PartnerSingleView = await Partner.findById(req.params.id);
        if (PartnerSingleView == null) {
            return res.status(404).json({ message: "Cannot Find The Partner" });
        }
        else {
            res.json(PartnerSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const PartnerDelete = async (req, res) => {
    const PartnerId =  req.params.id;

    try {
         await Partner.deleteOne({_id: PartnerId})
         res.json({message:"User Partner deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update
export const Partnerupdate  = async (req, res) => {
    const { id } = req.params;
    const { partnername } = req.body;
    const { file } = req;

    try {
        // Find the user by ID
        const user = await Partner.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        // Update user details
        if (partnername) {
            user.partnername = partnername;
        }
        // Update image if a new file is uploaded
        if (file) {
            user.partnerimage = file.filename;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};
