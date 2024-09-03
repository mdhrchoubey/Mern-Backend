const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http=require('http').Server(app)


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
})

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));