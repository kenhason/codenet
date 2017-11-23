import React, { Component } from 'react'

class CreateQuestion extends Component {
    constructor() {
        super()

        this.state = {
            question: {
                description: '',
                price: 0
            }
        }
    }

    updateQuestion(event) {
        console.log(event.target.value)
        let updatedQuestion = Object.assign({}, this.state.question)
        updatedQuestion[event.target.id] = event.target.value
        this.setState({
            question: updatedQuestion
        })
    }

    submitQuestion() {
        this.props.onCreate(this.state.question)
    }
    
    render() {
        return(
            <div className="card bg-faded m-2">
                <div className="card-block">
                    <h4 className="card-title">Create Question</h4>
                    <div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input id="description" onChange={this.updateQuestion.bind(this)} className="form-control" type="text" placeholder="Description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Price</label>
                            <input id="price" onChange={this.updateQuestion.bind(this)} className="form-control" type="text" placeholder="Price"/>
                        </div>
                        <button onClick={this.submitQuestion.bind(this)} className="btn btn-danger" type="submit">Submit Question</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuestion