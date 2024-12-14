import moment from 'moment';
import WebsiteSlider from '../models/WebsiteSlider.models.js';

// All Account Create
export const WebsiteSlidercreate = async (req, res) => {
    const { filename } = req.file;

    // Check if all required fields are provided
    if (!filename) {
        return res.status(400).json({ status: 400, message: 'Please fill all the data' });
    }

    try {
        // If email doesn't exist, create a new user
        const date = moment().format('YYYY-MM-DD');

        const userdata = new WebsiteSlider({
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
export const WebsiteSliderIndex = async (req, res) => {
    try {
        const WebsiteSliderView = await WebsiteSlider.find();
        res.json(WebsiteSliderView);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete

export const WebsiteSliderDelete = async (req, res) => {
    const WebsiteSliderDelete =  req.params.id;
    
    try {
         await WebsiteSlider.deleteOne({_id: WebsiteSliderDelete})
         res.json({message:"Acoount deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };


 
// single Acccount View 

export const CategoriesSingleDetails = async (req, res) => {
    try {
        const CategoriesView = await Categories.findById(req.params.id);
        if (CategoriesView == null) {
            return res.status(404).json({ message: "Cannot Find Categories" });
        }
        else {
            res.json(CategoriesView);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



 // All Acccount Update

export const CategoriesUpdate  = async (req, res) => {

    const { id } = req.params;
    const { Categorie } = req.body;
    const { Categoriedec } = req.body;
    const { Categoriesstatus } = req.body;
    const { file } = req;
    

    try {
        // Find the user by ID
        const Categorieslist = await Categories.findById(id);

        if (!Categorieslist) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Update user details
        if (Categorie) {
            Categorieslist.Categorie = Categorie;
        }
        if (username) {
            Categorieslist.Categoriedec = Categoriedec;
        }
        if (email) {
            Categorieslist.Categoriesstatus = Categoriesstatus;
        }
        // Update image if a new file is uploaded
        if (file) {
            Categorieslist.imgpath = file.filename;
        }

        // Save the updated user data
        const updatedCategories = await Categorieslist.save();

        res.status(200).json({ status: 200, updatedCategories });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
};

