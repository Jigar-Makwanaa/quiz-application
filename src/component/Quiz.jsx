import React, { useState } from 'react'
import Header from './Header'
import './quiz.css'

const Quiz = () => {

    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const [curruntQuestion, setCurruntQuestion] = useState(0)

    const questions = [
        {
            text: "Who is Prime Minister of INDIA?",
            options: [
                { id: 0, text: "Manmohan Singh", isCorrect: false },
                { id: 1, text: "Atal Bihari Vajpayee", isCorrect: false },
                { id: 2, text: "Inder Kumar Gujral", isCorrect: false },
                { id: 3, text: "Narendra Modi ", isCorrect: true },
            ],
        },
        {
            text: "What is the capital of INDIA?",
            options: [
                { id: 0, text: "Rajasthan", isCorrect: false },
                { id: 1, text: "Gujarat", isCorrect: false },
                { id: 2, text: "M P", isCorrect: false },
                { id: 3, text: "New Delhi ", isCorrect: true },
            ],
        },
        {
            text: "What year was the Constitution of INDIA written?",
            options: [
                { id: 0, text: "1949", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
            ],
        },
        {
            text: "Who was the second president of the INDIA?",
            options: [
                { id: 0, text: "Sarvepalli Radhakrishna", isCorrect: true },
                { id: 1, text: "Narendra modi", isCorrect: false },
                { id: 2, text: "Droupadi Murmu", isCorrect: false },
                { id: 3, text: "Ram Nath Kovind", isCorrect: false },
            ],
        },
        {
            text: "What is the largest state in the INDIA?",
            options: [
                { id: 0, text: "Gujarat", isCorrect: false },
                { id: 1, text: "Rajasthan", isCorrect: true },
                { id: 2, text: "MP", isCorrect: false },
                { id: 3, text: "Andhra Pradesh", isCorrect: false },
            ],
        },
        {
            text: "Which of the following countries DO NOT border the INDIA ?",
            options: [
                { id: 0, text: "Bangladesh", isCorrect: false },
                { id: 1, text: "Bhutan", isCorrect: true },
                { id: 2, text: "Sri Lanka", isCorrect: true },
                { id: 3, text: "Nepal", isCorrect: false },
            ],
        },
    ];

    // Helper functions

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        if (curruntQuestion + 1 < questions.length) {
            setCurruntQuestion(curruntQuestion + 1)
        }
        else {
            setShowResults(true)
        }
    }

    const restartGame = () => {
        setScore(0)
        setCurruntQuestion(0)
        setShowResults(false)
    }

    return (
        <>
            <Header />

            {/* Quiz section start  */}

            <div className="quiz-section">
                <div className="container">
                    <div className="row">
                        <div className="main">

                            <h1>INDIA QUIZ</h1>

                            {
                                showResults ?
                                    <div className="box">
                                        <div className="results">
                                            <h2>Final results</h2>
                                        </div>
                                        <div className="content">
                                            <div className="details">
                                                <div className="ans">
                                                    <h3>{score} out of {questions.length} :- ({(score / questions.length) * 100}%) </h3>
                                                </div>
                                                <div className="btn">
                                                    <button onClick={() => restartGame()}>Restart game</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    :

                                    <div className="box">
                                        <div className="que-head">
                                            <h2>Question {curruntQuestion + 1} / {questions.length}</h2>
                                        </div>
                                        <div className="content">
                                            <div className="details">
                                                <div className="que">
                                                    <h3>
                                                        {
                                                            questions[curruntQuestion].text
                                                        }
                                                    </h3>
                                                </div>
                                                <div className="option">
                                                    <ul>
                                                        {
                                                            questions[curruntQuestion].options.map((option) => {
                                                                return (
                                                                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz section end */}
        </>
    )
}

export default Quiz