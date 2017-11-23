import React, { Component } from 'react'
import { Answers, Questions } from '../'

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-0 p-md-2">
                        <h2 className='text-danger text-center'>Question</h2>
                        <Questions />
                    </div>
                    <div className="col-md-6 p-0 p-md-2">
                        <h2 className='text-info text-center'>Answer</h2>
                        <Answers />
                    </div>
                </div>  
            </div>
        )
    }
}

export default Home