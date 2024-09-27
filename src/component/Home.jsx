import React from 'react'
import './home.css'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />

            {/* quiz section start  */}

            <div className="quiz-section">
                <div className="container">
                    <div className="main">
                        <div className="box">
                            <div className="content flex">
                                <div className="details">
                                    <h2>refer and earn</h2>
                                    <p>A quiz is a game or contest where players answer questions to test their knowledge on a topic or topics. </p>
                                </div>
                                <div className="btn">
                                    <Link to={'/quiz'}>
                                    start quiz
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* quiz section end  */}

            {/* complete quiz start */}

            <div className="complete-quiz">
                <div className="container">
                    <div className="row">
                        <div className="main">
                        <div className="heading">
                            <h2>complete it!</h2>
                        </div>
                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head flex">
                                        <div className="title">
                                            <h3>computer network</h3>
                                        </div>
                                        <div className="icon">
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* complete quiz end */}

        </>
    )
}

export default Home