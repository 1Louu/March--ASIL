// Import express
import express from "express";

// Import Serverless 
import serverless from "serverless-http";

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


// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
  });

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Port
app.listen(5000,()=>{
    console.log("Le serveur ASIL est en route.");
})

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);