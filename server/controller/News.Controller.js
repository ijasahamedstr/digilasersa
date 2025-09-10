import moment from 'moment';
import News from '../models/News.models.js';

export const Newscreate = async (req, res) => {
    const { newsname, newsdec,newsimagelinks } = req.body;

    // Input validation
    if (!newsname || !newsdec || !newsimagelinks) {
        return res.status(400).json({
            status: 400,
            message: 'Please provide gift name, gift type, and gift image.'
        });
    }

    try {
        const date = moment().format('YYYY-MM-DD');

        const newNews = new News({
            newsname,
            newsdec,
            newsimagelinks: newsimagelinks || [],
            date,
        });

        const savedNews = await newNews.save();

        res.status(201).json({
            status: 201,
            message: 'News created successfully.',
            data: savedNews,
        });
    } catch (error) {
        console.error('Error creating News:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error. Could not create the News.',
            error: error.message,
        });
    }
};

// All Acccount View 
export const NewsIndex = async (req, res) => {
    try {
        const Newsview = await News.find();
        res.json(Newsview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

// single Acccount View 
export const NewsSingleDetails = async (req, res) => {
    try {
        const NewsSingleView = await News.findById(req.params.id);
        if (NewsSingleView == null) {
            return res.status(404).json({ message: "Cannot Find The News" });
        }
        else {
            res.json(NewsSingleView);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

// All Acccount Delete
export const NewsDelete = async (req, res) => {
    const NewsId =  req.params.id;

    try {
         await News.deleteOne({_id: NewsId})
         res.json({message:"User News deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
};


// All Acccount Update
export const Newsupdate = async (req, res) => {
  const { id } = req.params;
  const { newsname, newsdec, newsimagelinks } = req.body; // destructure array

  try {
    // Find the news item by ID
    const newsItem = await News.findById(id);
    if (!newsItem) {
      return res.status(404).json({ status: 404, message: "News item not found" });
    }

    // Update fields if they exist in the request
    if (newsname) newsItem.newsname = newsname;
    if (newsdec) newsItem.newsdec = newsdec;
    if (Array.isArray(newsimagelinks) && newsimagelinks.length > 0) {
      newsItem.newsimagelinks = newsimagelinks; // assign the new array
    }

    // Save updated news item
    const updatedNews = await newsItem.save();

    res.status(200).json({
      status: 200,
      message: "News updated successfully",
      data: updatedNews,
    });
  } catch (error) {
    console.error("Error updating News:", error);
    res.status(500).json({ status: 500, message: "Internal server error", error: error.message });
  }
};