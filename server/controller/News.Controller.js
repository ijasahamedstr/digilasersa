import moment from 'moment';
import News from '../models/news.models.js';

// All Account Create
export const Newscreate = async (req, res) => {
    const { filename } = req.file;
    const { newsheading, newsdec } = req.body;

    // Check if all required fields are provided
    if (!newsheading || !newsdec || !filename) {
        return res.status(400).json({ status: 400, message: 'Please fill all the data' });
    }

    try {
        // If email doesn't exist, create a new user
        const date = moment().format('YYYY-MM-DD');

        const userdata = new News({
            newsheading,
            newsdec,
            imgpath: filename,
            date
        });

        const finaldata = await userdata.save();

        // Return success response
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: 500, message: 'Internal server error', error });
    }
};

// All Acccount View 
export const NewsIndex = async (req, res) => {
    try {
        const NewsView = await News.find();
        res.json(NewsView);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete

export const NewsDelete = async (req, res) => {
    const NewsDeleteId =  req.params.id;
    
    try {
         await News.deleteOne({_id: NewsDeleteId})
         res.json({message:"Acoount deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };


 
// single Acccount View 

export const NewsSingleDetails = async (req, res) => {
    try {
        const NewsView = await News.findById(req.params.id);
        if (NewsView == null) {
            return res.status(404).json({ message: "Cannot Find Categories" });
        }
        else {
            res.json(NewsView);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



//  // All Acccount Update

// export const CategoriesUpdate  = async (req, res) => {

//     const { id } = req.params;
//     const { Categorie } = req.body;
//     const { Categoriedec } = req.body;
//     const { Categoriesstatus } = req.body;
//     const { file } = req;
    

//     try {
//         // Find the user by ID
//         const Categorieslist = await Categories.findById(id);

//         if (!Categorieslist) {
//             return res.status(404).json({ status: 404, message: "User not found" });
//         }

//         // Update user details
//         if (Categorie) {
//             Categorieslist.Categorie = Categorie;
//         }
//         if (username) {
//             Categorieslist.Categoriedec = Categoriedec;
//         }
//         if (email) {
//             Categorieslist.Categoriesstatus = Categoriesstatus;
//         }
//         // Update image if a new file is uploaded
//         if (file) {
//             Categorieslist.imgpath = file.filename;
//         }

//         // Save the updated user data
//         const updatedCategories = await Categorieslist.save();

//         res.status(200).json({ status: 200, updatedCategories });
//     } catch (error) {
//         res.status(401).json({ status: 401, error });
//     }
// };

