const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const examModel = require("./models/exam")
const { response } = require("express")
const { request } = require("express")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://nevin1111:footballnevin@cluster0.ltgqnuy.mongodb.net/internalmark?retryWrites=true&w=majority&appName=Cluster0")

app.post("/calculate", (request, response) => {

    const name = (request.body.name)
    const admno = (request.body.admno)
    const batch = (request.body.batch)

    const present = parseInt(request.body.present)
    const totalPresent = parseInt(request.body.totalp)
    const exam1 = parseInt(request.body.exam1)
    const totalExam1 = parseInt(request.body.totalExam1)
    const exam2 = parseInt(request.body.exam2)
    const totalExam2 = parseInt(request.body.totalExam2)
    const assignment1 = parseInt(request.body.assignment1)
    const assignment2 = parseInt(request.body.assignment2)

    const attendance = (present / totalPresent) * 8
    const firstExam = (exam1 / totalExam1) * 10
    const secondExam = (exam2 / totalExam2) * 10
    const assignment = ((assignment1 + assignment2) / 24) * 12
    const total = attendance + firstExam + secondExam + assignment

    let data_store = new examModel(
        {
            name: name,
            admno: admno,
            batch: batch,
            present: present,
            totalPresent: totalPresent,
            exam1: exam1,
            totalExam1: totalExam1,
            exam2: exam2,
            totalExam2: totalExam2,
            assignment1: assignment1,
            assignment2: assignment2
        })

    data_store.save()

    response.json({
        "name": name,
        "admno": admno,
        "batch": batch,
        "Exam": firstExam + secondExam,
        "attandance": attendance,
        "assignment": assignment,
        "internalMark": total
    })
})

app.get("/viewall",(request,response)=>{
    examModel.find().then(
        (items)=>{
            response.json(items)
        }
    ).catch()
})

app.listen(4000, () => {
    console.log("Server is running")
})