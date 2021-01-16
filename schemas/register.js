const mongoose = require("mongoose")
const database = require("../database")

const userSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
        type: String,
    },
    password: {
        type:String
    }
})

module.exports = mongoose.model("User", userSchema);
