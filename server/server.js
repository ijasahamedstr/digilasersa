// Import required modules
import express from "express";
import connectDB from "./lib/db.js";
import cors from "cors";
import cookiParser from "cookie-parser";
import AccountAdminloginrouter from './routes/AccountLogin.route.js';
import AccountAdminrouter from "./routes/AccountRegisterAdmin.route.js";
import path from 'path';
import { fileURLToPath } from 'url';
import Promotionalgifts from "./routes/Promotionalgiftssection.route.js";
import Printingdepartment from "./routes/Printingdepartment.route.js";
import Screenssection from "./routes/Screenssection.route.js";
import ArabicCalligraphy from "./routes/ArabicCalligraphy.route.js";
import Socialmediasection from "./routes/Socialmedia-section.route.js";
import MediaCommunicationsphoto from "./routes/MediaCommunicationsphoto.route.js";
import MediaCommunicationsvideo from "./routes/MediaCommunicationsvideo.route.js";
import Newssection from "./routes/News.route.js";
import Partner from "./routes/Partner.route.js";


// Create an instance of Express
const app = express();

app.use(cookiParser());

// Connect DB
connectDB();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(cors({
  origin: ["https://digilasersa.vercel.app", "https://digilasersa-g2hb.vercel.app"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

//Data understanding middleware
app.use(express.json());


//Validate your Data
app.use(express.urlencoded({extended:true}))

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/ArabicCalligraphy', express.static(path.join(__dirname, '/uploads/ArabicCalligraphy')));
app.use('/uploads/Screenssection', express.static(path.join(__dirname, '/uploads/Screenssection')));
app.use('/uploads/Socialmedia', express.static(path.join(__dirname, '/uploads/Socialmedia')));


//CLIENT -> MIDDLEWARE -> SERVER

//ADMIN -> MIDDLEWARE -> SERVER
app.use('/Adminlogin', AccountAdminloginrouter);
app.use('/Adminregister',AccountAdminrouter);
app.use('/Promotionalgifts',Promotionalgifts);
app.use('/Printingdepartment',Printingdepartment);
app.use('/Screensdepartment',Screenssection);
app.use('/ArabicCalligraphy',ArabicCalligraphy);
app.use('/Socialmedia',Socialmediasection);
app.use('/MediaCommunicationsphoto',MediaCommunicationsphoto);
app.use('/MediaCommunicationsvideo',MediaCommunicationsvideo);
app.use('/News',Newssection);
app.use('/Partner',Partner);


// Start the Express server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});