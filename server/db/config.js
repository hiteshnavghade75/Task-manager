const mongoose = require("mongoose")
require("dotenv").config();
let BASE_URL = "mongodb+srv://hiteshnavghade75:Hitesh2862@cluster0.eykssla.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(BASE_URL)
    .then(() => {
        console.log("Connected to db...")
    })
    .catch(() => {
        console.log("Failed to connect to db")
    })
