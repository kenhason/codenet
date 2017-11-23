import React, { Component } from 'react'

class Question extends Component {
    render() {
        var status = this.props.question.status ? "Solved" : "Pending"
        return(
            <div className="card m-2">
                <div className="card-block">
                    <h4 className="card-title">Category: {this.props.question.category}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Language: {this.props.question.language}</h6>
                    <p className="card-text">Description: {this.props.question.description}</p>
                    <a href="#" className="card-link">status: {status}</a>
                    <a href="#" className="card-link">Price: {this.props.question.price}</a>
                </div>
            </div>
        )
    }
}

export default Question