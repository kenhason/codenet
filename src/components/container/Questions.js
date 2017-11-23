import React, { Component } from 'react'
import { Question } from '../'

class Questions extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Question /></li>
                    <li><Question /></li>
                    <li><Question /></li>
                </ul>
            </div>
        )
    }
}

export default Questions