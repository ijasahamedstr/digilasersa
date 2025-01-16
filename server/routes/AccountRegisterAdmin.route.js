// Import required modules
import express from "express";
import { AccountCreatAdmin } from "../controller/AccountRegisterAdmin.Controller.js";


const AccountAdminrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
AccountAdminrouter.post('/',AccountCreatAdmin);


export default AccountAdminrouter;