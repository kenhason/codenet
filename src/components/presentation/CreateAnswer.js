import React, { Component } from 'react'

class CreateAnswer extends Component {
    constructor() {
        super()

        this.state = {
            answer: {
                codes: ''
            }
        }
    }

    updateAnswer(event) {
        console.log(event.target.value)
        let updatedAnswer = Object.assign({}, this.state.answer)
        updatedAnswer.codes = event.target.value
        this.setState({
            answer: updatedAnswer
        })
    }

    submitAnswer() {
        this.props.onCreate(this.state.answer)
    }
    
    render() {
        return(
            <div className="card bg-faded m-2">
                <div className="card-block">
                    <h4 className="card-title">Create Answer</h4>
                    <div>
                        <div className="form-group">
                            <label htmlFor="codes">Codes</label>
                            <input onChange={this.updateAnswer.bind(this)} className="form-control" type="text" placeholder="Codes"/>
                        </div>
                        <button onClick={this.submitAnswer.bind(this)} className="btn btn-info" type="submit">Submit Answer</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAnswer