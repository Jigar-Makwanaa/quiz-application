import React from 'react'
import Header from './Header'
import './quiz.css'

const Quiz = () => {
    return (
        <>
            <Header />

            {/* Quiz section start  */}

            <div className="quiz-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="que-head">
                                <h2>Question 3/10</h2>
                            </div>
                            <div className="box">
                                <div className="content">

                                    <div className="details">
                                        <div className="que">
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                        </div>
                                        <div className="option">
                                            <ul>
                                                <li><a href="">a</a></li>
                                                <li><a href="">b</a></li>
                                                <li><a href="">c</a></li>
                                                <li><a href="">d</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz section end */}
        </>
    )
}

export default Quiz