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
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));

//Data understanding middleware
app.use(express.json());


//Validate your Data
app.use(express.urlencoded({extended:true}))

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/Promotionalgifts', express.static(path.join(__dirname, '/uploads/Promotionalgifts')));
app.use('/uploads/Printingdepartment', express.static(path.join(__dirname, '/uploads/Printingdepartment')));
app.use('/uploads/ArabicCalligraphy', express.static(path.join(__dirname, '/uploads/ArabicCalligraphy')));


//CLIENT -> MIDDLEWARE -> SERVER

//ADMIN -> MIDDLEWARE -> SERVER
app.use('/Adminlogin', AccountAdminloginrouter);
app.use('/Adminregister',AccountAdminrouter);
app.use('/Promotionalgifts',Promotionalgifts);
app.use('/Printingdepartment',Printingdepartment);
app.use('/Screensdepartment',Screenssection);
app.use('/ArabicCalligraphy',ArabicCalligraphy);


// Start the Express server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});