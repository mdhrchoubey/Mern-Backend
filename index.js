const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http=require('http').Server(app)
const cloudinary =require("cloudinary").v2;


const dotenv = require("dotenv");
dotenv.config();


mongoose.connect("mongodb+srv://mdhrchoubey:DsqYfwIzNrLflpvj@mernproject.tgo20.mongodb.net/?retryWrites=true&w=majority&appName=MernProject");



app.use(bodyParser.json());
app.use(cors()
);


const userRoute=require("./Routes/UserRoute")
app.use("/user", userRoute)

const Query=require("./Routes/QueryRoute")
app.use("/query", Query)

app.get("/", (req, res)=>{
    res.send("welcome")
});


cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
  });

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));