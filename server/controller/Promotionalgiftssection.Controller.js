import moment from 'moment';
import Promotionalgifts from '../models/Promotionalgiftssection.models.js';

export const Promotionalgiftscreate = async (req, res) => {
    const { filename } = req.file;
    const { giftname, gifttype } = req.body;

    // Input validation
    if (!giftname || !gifttype || !filename) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide gift name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newGift = new Promotionalgifts({
            giftname,
            gifttype,
            gifttimage: filename,
            date,
        });

        const savedGift = await newGift.save();

        res.status(201).json({
            status: 201,
            message: 'Promotional gift created successfully.',
            data: savedGift,
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
export const PromotionalgiftIndex = async (req, res) => {
    try {
        const Promotionalgiftview = await Promotionalgifts.find();
        res.json(Promotionalgiftview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const PromotionalgiftSingleDetails = async (req, res) => {
    try {
        const PromotionalgiftSingleView = await Promotionalgifts.findById(req.params.id);
        if (PromotionalgiftSingleView == null) {
            return res.status(404).json({ message: "Cannot Find The Promotionalgifts" });
        }
        else {
            res.json(PromotionalgiftSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const PromotionalgiftDelete = async (req, res) => {
    const PromotionalgiftId =  req.params.id;

    try {
         await Promotionalgifts.deleteOne({_id: PromotionalgiftId})
         res.json({message:"User Promotionalgifts deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update

export const PromotionalgiftUpdates  = async (req, res) => {

    const { id } = req.params;
    const { giftname } = req.body;
    const { gifttype } = req.body;
    const { file } = req;

    try {
        // Find the user by ID
        const Promotionalgiftsupdate = await Promotionalgifts.findById(id);

        if (!Promotionalgiftsupdate) {
            return res.status(404).json({ status: 404, message: "Promotionalgifts not found" });
        }

        // Update user details
        if (giftname) {
            Promotionalgiftsupdate.giftname = giftname;
        }
        if (gifttype) {
            Promotionalgiftsupdate.gifttype = gifttype;
        }
        if (file) {
            Promotionalgiftsupdate.gifttimage = file.filename;
        }

        // Save the updated user data
        const updatedPromotionalgift = await user.save();

        res.status(200).json({ status: 200, updatedPromotionalgift });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};
