const mongoose = require("mongoose")

const examSchema = mongoose.Schema(
    {
        name: String,
        admno: String,
        batch: String,
        present: String,
        totalPresent: String,
        exam1: String,
        totalExam1: String,
        exam2: String,
        totalExam2: String,
        assignment1: String,
        assignment2: String,
        attendanceMark: String,
        examMark: String,
        assignmentMark: String,
        internalMark: String
    }
)

const examModel=mongoose.model("internalmark",examSchema)
module.exports=examModel