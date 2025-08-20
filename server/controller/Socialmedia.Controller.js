import Socialmedia from "../models/Socialmedia.models.js";

// Add the ScreenssectionCreate
export const SocialmediaCreate = async (req, res) => {
    // Extract files and fields from the request
    const files = req.files && req.files.length > 0 ? req.files : [];
    const {soicalmedianame, soicalmediamaintype, soicalmediasubtype} = req.body;

    try {
        // Process files and store filenames (assuming multer or a similar middleware is used)
        const fileUrls = files.map((file) => file.filename);

        // Create a new document with the data
        const newSocialmedia = new Socialmedia({
            soicalmedianame,
            soicalmediamaintype,
            soicalmediasubtype,
            Soicalmediaimage: fileUrls
        });

        // Save the document to the database
        await newSocialmedia.save();
        res.status(200).json({ message: "Socialmedia successfully created", userData: newSocialmedia });
    } catch (error) {
        console.error("Error in Socialmedia:", error);
        res.status(500).json({ error: "An error occurred while creating the Socialmedia." });
    }
};

// All Screenssection View 
export const SocialmediaIndex = async (req, res) => {
    try {
        const SocialmediaRegisters = await Socialmedia.find();

        res.json(SocialmediaRegisters);
    } catch (error) {

        logger.error('Error fetching Socialmedia registrations:', { message: error.message, stack: error.stack });

        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


// single Acccount View 
export const SocialmediaSingleDetails = async (req, res) => {
    try {
        const SocialmediaRegisters = await Socialmedia.findById(req.params.id);
        if (SocialmediaRegisters == null) {
            return res.status(404).json({ message: "Cannot Find Acoount" });
        }
        else {
            res.json(SocialmediaRegisters);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete
export const SocialmediaDelete = async (req, res) => {
    const SocialmediaDeleteId =  req.params.id;

    try {
         await Socialmedia.deleteOne({_id: SocialmediaDeleteId})
         res.json({message:"User Socialmedia deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};
 
// All Acccount Update
export const Socialmediaupdate = async (req, res) => {
    const { id } = req.params;
    const { soicalmedianame, soicalmediamaintype, soicalmediasubtype } = req.body; // Destructured all at once
    const files = req.files && req.files.length > 0 ? req.files : [];

    try {
        // Find the user by ID
        const user = await Socialmedia.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Update fields if present
        if (soicalmedianame) user.soicalmedianame = soicalmedianame;
        if (soicalmediamaintype) user.soicalmediamaintype = soicalmediamaintype;
        if (soicalmediasubtype) user.soicalmediasubtype = soicalmediasubtype;

        // Handle file upload and update projectimage if files are present
        if (files.length > 0) {
            const fileUrls = files.map((file) => file.filename); // Getting filenames from uploaded files
            user.Soicalmediaimage = fileUrls; // Assuming projectimage can store an array of file URLs
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        // Sending more descriptive error message
        res.status(500).json({ status: 500, message: "Error updating promotional gift", error: error.message });
    }
};
