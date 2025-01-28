import moment from 'moment';
import ArabicCalligraphy from '../models/ArabicCalligraphy.models.js';

export const ArabicCalligraphycreate = async (req, res) => {
    const { filename } = req.file;
    const { arabicCalligraphyname } = req.body;

    // Input validation
    if (!arabicCalligraphyname || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide ArabicCalligraphy name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newarabicCalligraphy = new ArabicCalligraphy({
            arabicCalligraphyname,
            arabicCalligraphyimage: filename,
            date,
        });

        const savedarabicCalligraphy = await newarabicCalligraphy.save();

        res.status(201).json({
            status: 201,
            message: 'Promotional ArabicCalligraphy created successfully.',
            data: savedarabicCalligraphy,
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
export const ArabicCalligraphyIndex = async (req, res) => {
    try {
        const ArabicCalligraphyview = await ArabicCalligraphy.find();
        res.json(ArabicCalligraphyview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const ArabicCalligraphySingleDetails = async (req, res) => {
    try {
        const ArabicCalligraphySingleView = await ArabicCalligraphy.findById(req.params.id);
        if (ArabicCalligraphySingleView == null) {
            return res.status(404).json({ message: "Cannot Find The ArabicCalligraphy" });
        }
        else {
            res.json(ArabicCalligraphySingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const ArabicCalligraphyDelete = async (req, res) => {
    const ArabicCalligraphyId =  req.params.id;

    try {
         await ArabicCalligraphy.deleteOne({_id: ArabicCalligraphyId})
         res.json({message:"User ArabicCalligraphy deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update
export const ArabicCalligraphyupdate  = async (req, res) => {
    const { id } = req.params;
    const { arabicCalligraphyname } = req.body;
    const { file } = req;

    try {
        // Find the user by ID
        const user = await ArabicCalligraphy.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        // Update user details
        if (arabicCalligraphyname) {
            user.arabicCalligraphyname = arabicCalligraphyname;
        }
        // Update image if a new file is uploaded
        if (file) {
            user.arabicCalligraphyimage = file.filename;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};
