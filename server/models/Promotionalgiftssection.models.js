import mongoose from 'mongoose';

// Define the schema
const PromotionalgiftsSchema = new mongoose.Schema({
    giftname: {
        type: String,
    },
    gifttype: {
        type: String,
    },
    gifttimage: {
        type: String,
    },
    date: {
        type: Date
    }
});

// Create the model
const Promotionalgifts = mongoose.model('Promotionalgifts', PromotionalgiftsSchema);

// Export the model
export default Promotionalgifts;
