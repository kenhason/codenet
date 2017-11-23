import React, { Component } from 'react'
import { Question } from '../'
import APIManager from '../../../utils/APIManager'

class Questions extends Component {
    constructor() {
        super()
        this.state = {
            questionList: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/question', null, (err, res) => {
            if (err) {
                alert("ERROR: " + error)
                return
            }
            console.log(res.result)
            this.setState({
                questionList: res.result
            })
        })
    }

    render() {
        const questions = this.state.questionList.map((question, i) => {
            console.log(question)
			return (
				<div key={i}><Question question={question}  /></div>
			)
        })
        

        return(
            <div>
                
                    {questions}
                
            </div>
        )
    }
}

export default Questions