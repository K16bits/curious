const {Schema} = require("../database/dataconfig");
const mongoose = require("../database/dataconfig");

const UserSchema = new Schema({
    name: String,
    password: String,
    },{
        timestamps: true
    }
)


const User = mongoose.model("User",UserSchema);
module.exports = User;