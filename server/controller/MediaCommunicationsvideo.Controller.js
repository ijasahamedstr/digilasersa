import moment from 'moment';

export const MediaCommunicationcreate = async (req, res) => {
    const { filename } = req.file;
    const { MediaCommunicationsphotoname } = req.body;

    // Input validation
    if (!MediaCommunicationsphotoname || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide gift name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newMediaCommunicationsphoto = new MediaCommunicationsphoto({
            MediaCommunicationsphotoname,
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
