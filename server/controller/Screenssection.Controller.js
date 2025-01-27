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
 
