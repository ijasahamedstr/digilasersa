import moment from 'moment';
import Vote from '../models/Vote.models.js';


export const Votecreate = async (req, res) => {
  const { name, mobile, imageNumber } = req.body;

  // Validate input
  if (!name || !mobile || !imageNumber) {
    return res.status(400).json({
      status: 400,
      message: "Please provide name, mobile number, and image number.",
    });
  }

  try {
    // Check if this mobile already voted
    const existingVote = await Vote.findOne({ mobile });
    if (existingVote) {
      return res.status(400).json({
        status: 400,
        message: "This mobile number has already voted.",
      });
    }

    // Save new vote
    const date = moment().format("YYYY-MM-DD");

    const newVote = new Vote({
      name,
      mobile,
      imageNumber,
      date,
    });

    const savedVote = await newVote.save();

    res.status(201).json({
      status: 201,
      message: "Vote recorded successfully.",
      data: savedVote,
    });
  } catch (error) {
    console.error("Error saving vote:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error. Could not record the vote.",
      error: error.message,
    });
  }
};

// All Acccount View 
export const VoteIndex = async (req, res) => {
    try {
        const Voteview = await Vote.find();
        res.json(Voteview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


  export const VoteCount = async (req, res) => {
  try {
    // Aggregate vote counts by imageNumber
    const counts = await Vote.aggregate([
      { $group: { _id: "$imageNumber", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    // Convert array to object format { imageNumber: count }
    const result = {};
    counts.forEach((item) => {
      result[item._id] = item.count;
    });

    // Send response
    res.status(200).json(result);
  } catch (error) {
    console.error("Vote Count Fetch Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
