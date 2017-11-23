import React, { Component } from 'react'
import { Answers, Questions } from '../'

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className='text-danger'>Question</h2>
                        <Questions />
                    </div>
                    <div className="col-6">
                        <h2 className='text-info'>Answer</h2>
                        <Answers />
                    </div>
                </div>  
            </div>
        )
    }
}

export default Home