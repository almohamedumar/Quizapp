import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import TabContext from '../context/tabContext';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'What US city is known as the "birthplace of jazz"?',
            2: 'What is the capital of Greece?',
            3: 'What planet gave birth to Superman?',
            4: 'Who is president of America?',
            5: 'What is capital of India?'
        },
        answers: {
            1: {
                1: 'Chicago',
                2: 'New Orleans',
                3: 'New York'
            },
            2: {
                1: 'Athens',
                2: 'Patras',
                3: 'Kalamata'
            },
            3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn'
            },
            4: {
                1: 'Trump',
                2: 'Clinton',
                3: 'Biden'
            },
            5: {
                1: 'Delhi',
                2: 'Chennai',
                3: 'Mumbai'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1',
            4: '3',
            5: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step,toggletTab,updateCorrectAnswers) => {
        if(step === 5){
            toggletTab("tab3");
            return updateCorrectAnswers(this.state.score);
        }
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <TabContext.Consumer>
            {
                value =>  <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step,value.toggleTab,value.updateCorrectAnswers)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p class="change">Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p class="change">Thank you!</p>
                        </div>
                    )
                }
            </div>
                }
            </TabContext.Consumer>
        );
    }
}