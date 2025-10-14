import express from 'express';
import { VoteCount, Votecreate, VoteIndex } from '../controller/Vote.Controller.js';

// Create a new router instance
const Vote = express.Router();


// Create the Data Register
Vote.post('/',Votecreate);

// View the Data Register
Vote.get('/',VoteIndex);

Vote.get('/',VoteCount);


export default Vote;
