// Import required modules
import express from "express";
import connectDB from "./lib/db.js";
import cors from "cors";
import cookiParser from "cookie-parser";
import path from 'path';
import AccountAdminloginrouter from './routes/AccountLogin.route.js';
import AccountAdminrouter from "./routes/AccountRegisterAdmin.route.js";
import WebsiteSliderrouter from "./routes/WebsiteSlider.route.js";
import { fileURLToPath } from 'url';



// Create an instance of Express
const app = express();

app.use(cookiParser());

// Connect DB
connectDB();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
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

//CLIENT -> MIDDLEWARE -> SERVER


//ADMIN -> MIDDLEWARE -> SERVER
app.use('/Adminlogin', AccountAdminloginrouter);

app.use('/Adminregister',AccountAdminrouter);

app.use('/WebsiteSlider',WebsiteSliderrouter );


// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/Slider', express.static(path.join(__dirname, 'uploads/Slider')));


// Start the Express server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});