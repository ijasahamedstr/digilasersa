import Screenssection from "../models/Screenssection.models.js";

// Add the ScreenssectionCreate
export const ScreenssectionCreate = async (req, res) => {
    // Extract files and fields from the request
    const files = req.files && req.files.length > 0 ? req.files : [];
    const {projectname, projectype, projectdec} = req.body;

    try {
        // Process files and store filenames (assuming multer or a similar middleware is used)
        const fileUrls = files.map((file) => file.filename);

        // Create a new document with the data
        const newScreenssection = new Screenssection({
            projectname,
            projectype,
            projectdec,
            projectimage: fileUrls
        });

        // Save the document to the database
        await newScreenssection.save();
        res.status(200).json({ message: "Screenssection successfully created", userData: newScreenssection });
    } catch (error) {
        console.error("Error in Screenssection:", error);
        res.status(500).json({ error: "An error occurred while creating the Screenssection." });
    }
};

// All Screenssection View 
export const ScreenssectionIndex = async (req, res) => {
    try {
        const ScreenssectionRegisters = await Screenssection.find();

        res.json(ScreenssectionRegisters);
    } catch (error) {

        logger.error('Error fetching Screenssection registrations:', { message: error.message, stack: error.stack });

        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


// single Acccount View 
export const ScreenssectionSingleDetails = async (req, res) => {
    try {
        const ScreenssectionRegisters = await Screenssection.findById(req.params.id);
        if (ScreenssectionRegisters == null) {
            return res.status(404).json({ message: "Cannot Find Acoount" });
        }
        else {
            res.json(ScreenssectionRegisters);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete
export const ScreenssectionDelete = async (req, res) => {
    const ScreenssectionDeleteId =  req.params.id;

    try {
         await Screenssection.deleteOne({_id: ScreenssectionDeleteId})
         res.json({message:"User Screenssection deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};
 
// All Acccount Update
export const Screenssectionupdate = async (req, res) => {
    const { id } = req.params;
    const { projectname, projectype, projectdec } = req.body; // Destructured all at once
    const files = req.files && req.files.length > 0 ? req.files : [];

    try {
        // Find the user by ID
        const user = await Screenssection.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Update fields if present
        if (projectname) user.projectname = projectname;
        if (projectype) user.projectype = projectype;
        if (projectdec) user.projectdec = projectdec;

        // Handle file upload and update projectimage if files are present
        if (files.length > 0) {
            const fileUrls = files.map((file) => file.filename); // Getting filenames from uploaded files
            user.projectimage = fileUrls; // Assuming projectimage can store an array of file URLs
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        // Sending more descriptive error message
        res.status(500).json({ status: 500, message: "Error updating promotional gift", error: error.message });
    }
};
