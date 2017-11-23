import React, { Component } from 'react'

class Answer extends Component {
    render() {
        var testingResult = this.props.answer.testingResult ? "Success" : "Fail"
        return(
            <div className="card m-2">
                <div className="card-block">
                    <h4 className="card-title">QuestionID: {this.props.answer.questionId}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Testing Result: {testingResult}</h6>
                    <p className="card-text">Codes: {this.props.answer.codes}</p>
                    <a href="#" className="card-link">Time: {this.props.answer.timestamp}</a>
                </div>
            </div>
        )
    }
}

export default Answer