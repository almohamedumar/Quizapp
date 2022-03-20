import React from "react";
import withModal from "../hoc/withModal";

const Instruction = (props) => {
    return <div className="instruction">
        <h2 style={{textAlign:"center" }}>INSTRUCTIONS</h2>
        <ol>
            <li>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.</li>
            <li>After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. After responding to the 8th question, click on "Close" on the top of the window to exit the quiz.</li>
            <li>If you select an incorrect response for a question, you can try again until you get the correct response. If you retake the quiz, the questions and their respective responses will be randomized.</li>
            <li>The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question or retake a question again and get the correct response, your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.</li>
        </ol>
    </div>
}

export default withModal(Instruction);