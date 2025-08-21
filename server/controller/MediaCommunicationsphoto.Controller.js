import moment from 'moment';
import MediaCommunicationsphoto from '../models/MediaCommunicationsphoto.models.js';

export const MediaCommunicationcreate = async (req, res) => {
    const { filename } = req.file || {};
    const { MediaCommunicationsphotoname, MediaCommunicationsphototype } = req.body;

    // Input validation
    if (!MediaCommunicationsphotoname || !MediaCommunicationsphototype || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide gift name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newMediaCommunicationsphoto = new MediaCommunicationsphoto({
            MediaCommunicationsphotoname,
            MediaCommunicationsphototype,
            MediaCommunicationsphotoimage: filename,
            date,
        });

        const savedMediaCommunicationsphoto = await newMediaCommunicationsphoto.save();

        res.status(201).json({
            status: 201,
            message: 'MediaCommunications photo created successfully.',
            data: savedMediaCommunicationsphoto,
        });
    } catch (error) {
        console.error('Error creating MediaCommunications gift:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error. Could not create the MediaCommunications gift.',
            error: error.message,
        });
    }
};

// All Acccount View 
export const MediaCommunicationIndex = async (req, res) => {
    try {
        const MediaCommunicationview = await MediaCommunicationsphoto.find();
        res.json(MediaCommunicationview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const MediaCommunicationSingleDetails = async (req, res) => {
    try {
        const MediaCommunicationSingleView = await MediaCommunicationsphoto.findById(req.params.id);
        if (MediaCommunicationSingleView  == null) {
            return res.status(404).json({ message: "Cannot Find The MediaCommunication department" });
        }
        else {
            res.json(MediaCommunicationSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const  MediaCommunicationSingleDelete = async (req, res) => {
    const MediaCommunicationId =  req.params.id;

    try {
         await MediaCommunicationsphoto.deleteOne({_id: MediaCommunicationId})
         res.json({message:"User MediaCommunication deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update
export const MediaCommunicationUpdates  = async (req, res) => {
    const { id } = req.params;
    const { MediaCommunicationsphotoname } = req.body;
    const { MediaCommunicationsphototype } = req.body;
    const { file } = req;

    try {
        // Find the user by ID
        const user = await MediaCommunicationsphoto.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        // Update user details
        if (MediaCommunicationsphotoname) {
            user.MediaCommunicationsphotoname = MediaCommunicationsphotoname;
        }
        if (MediaCommunicationsphototype) {
            user.MediaCommunicationsphototype = MediaCommunicationsphototype;
        }
        // Update image if a new file is uploaded
        if (file) {
            user.MediaCommunicationsphotoimage = file.filename;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        res.status(200).json({ status: 200, updatedUser });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};
