import React, { Component } from 'react'
import { Answer } from '../'
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

    render() {
        const answers = this.state.answerList.map((answer, i) => {
            return(
                <div key={i}><Answer answer={answer}  /></div>
            )
        })

        return(
            <div>
                {answers}
            </div>
        )
    }
}

export default Answers