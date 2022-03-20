import React, { useContext } from "react";
import TabContext from "../context/tabContext";

const Result = () => {
    const tabcontext = useContext(TabContext);
    
  return ( <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p className="change">Your score is: {tabcontext.correctAnswers} of 15</p>
                            <p className="change">Thank you!</p>
    </div>
  );
};
export default Result;