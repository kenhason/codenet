import React, { Component } from 'react'
import { Answers, Questions } from '../'

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col"><Answers /></div>
                    <div className="col-6"><Questions /></div>
                </div>  
            </div>
        )
    }
}

export default Home