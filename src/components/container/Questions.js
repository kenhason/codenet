import React, { Component } from 'react'
import { Question, CreateQuestion } from '../'
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

    submitQuestion(question) {
        console.log("submitAnswer" + JSON.stringify(question))
        APIManager.post('/api/question', question, (err, res) => {
            if (err) {
                alert("ERROR: " + err)
                return
            }
            console.log(res.result)
            
            let updatedQuestionList = Object.assign([], this.state.questionList)
            updatedQuestionList.unshift(res.result)
            
            this.setState({
                questionList: updatedQuestionList
            })
        })
    }

    render() {
        const questions = this.state.questionList.map((question, i) => {
            // console.log(question)
			return (
				<div key={i}><Question question={question}  /></div>
			)
        })
        

        return(
            <div>
                <CreateQuestion onCreate={this.submitQuestion.bind(this)}/>
                {questions}
            </div>
        )
    }
}

export default Questions