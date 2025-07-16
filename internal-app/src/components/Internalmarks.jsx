import axios from 'axios'
import React, { useState } from 'react'

const Internalmarks = () => {

    const [input, changeInput] = useState(
        {
            "name": "",
            "admno": "",
            "batch": "",
            "present": "",
            "totalp": "",
            "exam1": "",
            "totalExam1": "",
            "exam2": "",
            "totalExam2": "",
            "assignment1": "",
            "assignment2": ""
        }
    )

    const [output, changeOutput] = useState(
        {
            name: "",
            admno: "",
            batch: "",
            attandance: "",
            Exam: "",
            assignment: "",
            internalMark: ""
        })


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readInput = () => {
        console.log(input)
        axios.post("http://localhost:4000/calculate", input)
            .then((response) => {
                changeOutput(response.data)
            })
            .catch(() => {
                alert("Something went wrong while calculating!")
            })
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h2 className="text-center">📘 Internal Mark Calculator</h2>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Batch</label>
                                <input type="text" className="form-control" name='batch' value={input.batch} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">No.of days present</label>
                                <input type="text" className="form-control" name='present' value={input.present} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total No.of days present</label>
                                <input type="text" className="form-control" name='totalp' value={input.totalp} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Exam marks</label>
                                <input type="text" className="form-control" name='exam1' value={input.exam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks(first)</label>
                                <input type="text" className="form-control" name='totalExam1' value={input.totalExam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Second Exam Marks</label>
                                <input type="text" className="form-control" name='exam2' value={input.exam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks(second)</label>
                                <input type="text" className="form-control" name='totalExam2' value={input.totalExam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 1 marks(out of 12)</label>
                                <input type="text" className="form-control" name='assignment1' value={input.assignment1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 2 marks(out of 12)</label>
                                <input type="text" className="form-control" name='assignment2' value={input.assignment2} onChange={inputHandler} />
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readInput}>Calculate</button>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <div class="card-body">
                                        <h3 class="card-title">Name: {output.name} </h3>
                                        <h4 class="card-title">Admission Number: {output.admno} </h4>
                                        <h4 class="card-title">Batch: {output.batch} </h4>
                                        <hr />
                                        <h4 class="text-danger">Internal Mark: {output.internalMark} </h4>
                                        <h5 class="card-title">Attandance Mark: {output.attandance} </h5>
                                        <h5 class="card-title">Assignment Mark: {output.assignment} </h5>
                                        <h5 class="card-title">Exam Mark: {output.Exam} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internalmarks








