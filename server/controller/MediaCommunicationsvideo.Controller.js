import moment from 'moment';
import MediaCommunicationsvideo from '../models/MediaCommunicationsvideo.models.js';

export const MediaCommunicationvideocreate = async (req, res) => {
    const { filename } = req.file; // This will be the video file
    const { MediaCommunicationsvideoname } = req.body; // Assuming this is the name you want for the video

    // Input validation
    if (!MediaCommunicationsvideoname || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide video name and video file.',
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        // Create a new instance for the MediaCommunication video model (assuming it exists)
        const newMediaCommunicationVideo = new MediaCommunicationsvideo({
            MediaCommunicationsvideoname,
            MediaCommunicationsvideo: filename, // Store the video filename
            date,
        });

        // Save the new video entry to the database
        const savedMediaCommunicationVideo = await newMediaCommunicationVideo.save();

        res.status(201).json({
            status: 201,
            message: 'MediaCommunication video created successfully.',
            data: savedMediaCommunicationVideo,
        });
    } catch (error) {
        console.error('Error creating MediaCommunication video:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error. Could not create the MediaCommunication video.',
            error: error.message,
        });
    }
};


// All Acccount View 
export const MediaCommunicationVideoIndex = async (req, res) => {
    try {
        const MediaCommunicationVideoview = await MediaCommunicationsvideo.find();
        res.json(MediaCommunicationVideoview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

  // single Acccount View 
export const MediaCommunicationVideoSingleDetails = async (req, res) => {
    try {
        const MediaCommunicationVideoSingleView = await MediaCommunicationsvideo.findById(req.params.id);
        if (MediaCommunicationVideoSingleView  == null) {
            return res.status(404).json({ message: "Cannot Find The MediaCommunication department" });
        }
        else {
            res.json(MediaCommunicationVideoSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

  // All Acccount Delete
export const  MediaCommunicationVideoDelete = async (req, res) => {
    const MediaCommunicationVideoId =  req.params.id;

    try {
         await MediaCommunicationsvideo.deleteOne({_id: MediaCommunicationVideoId})
         res.json({message:"User MediaCommunication Video deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


