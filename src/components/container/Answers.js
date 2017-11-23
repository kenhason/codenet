import React, { Component } from 'react'
import { Answer, CreateAnswer } from '../'
import APIManager from '../../../utils/APIManager'

class Answers extends Component {
    constructor() {
        super()

        this.state = {
            answerList: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/answer', null, (err, res) => {
            if (err) {
                alert("ERROR: " + err)
                return
            }
            console.log(res.result)
            this.setState({
                answerList: res.result
            })
        })
    }

    submitAnswer(answer) {
        console.log("submitAnswer")
        APIManager.post('/api/answer', answer, (err, res) => {
            if (err) {
                alert("ERROR: " + err)
                return
            }
            console.log(res.result)
            
            let updateAnswerList = Object.assign([], this.state.answerList)
            updateAnswerList.unshift(res.result)
            
            this.setState({
                answerList: updateAnswerList
            })
        })
    }

    render() {
        const answers = this.state.answerList.map((answer, i) => {
            return(
                <div key={i}><Answer answer={answer}  /></div>
            )
        })

        return(
            <div>
                <CreateAnswer onCreate={this.submitAnswer.bind(this)}/>
                {answers}
            </div>
        )
    }
}

export default Answers