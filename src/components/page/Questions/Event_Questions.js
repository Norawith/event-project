import React from 'react'
import { useState } from 'react';
import './Event_Questions.css';
import questions from './data_Questions';
import {Button, Container} from 'react-bootstrap';



function Event_Questions() {

    const [showScore, setShowScore] = useState(false );

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {

        if(isCorrect === true){
            
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

  return (
      
    <>
        <div className='app'>
            <Container>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button variant="primary" className="button-questions" style={{display:"flex"}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
					</div>
				</>
			)}
            </Container>
		    </div>
            
    </>
  )
}

export default Event_Questions