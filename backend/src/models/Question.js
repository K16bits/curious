const {Schema} = require("../database/dataconfig");
const mongoose = require("../database/dataconfig");

const QuestionSchema = new Schema({
    questions: String,
    },{
        timestamps: true
    }
)


const Question = mongoose.model("Question",QuestionSchema);
module.exports = Question;