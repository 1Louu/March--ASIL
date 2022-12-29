// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import routes
import router from "./routes/route.js";

// Init express
const app = express();

// use express json 
app.use(express.json()); 

// use Cors
app.use(cors()); 

// use Cors
app.use(router); 

// Port
app.listen(5000,()=>{
    console.log("Le serveur ASIL est en route.");
})