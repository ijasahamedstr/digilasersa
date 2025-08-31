import express from 'express';
import { PromotionalgiftDelete, PromotionalgiftIndex, Promotionalgiftscreate, PromotionalgiftSingleDetails, Promotionalgiftsupdate } from '../controller/Promotionalgiftssection.Controller.js';

// Create a new router instance
const Promotionalgifts = express.Router();


// Create the Data Register
Promotionalgifts.post('/',Promotionalgiftscreate );

// View the Data Register
Promotionalgifts.get('/',PromotionalgiftIndex);

// View the Single Data Register
Promotionalgifts.get("/:id",PromotionalgiftSingleDetails);

//Delete Data Register
Promotionalgifts.delete('/:id',PromotionalgiftDelete);

//Update Data Register
Promotionalgifts.put('/:id', Promotionalgiftsupdate);


export default Promotionalgifts;
