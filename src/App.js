import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Tabs from "./components/TabComponent/Tabs";
//import Quiz from './components/QuizMain';
import Instruction from "./components/Instruction";

function App() {
  const [instructionOpen,setInstructionOpen] = useState(true);

  const toggleInstruction = () => setInstructionOpen((visible) => !visible);

  return (
    <div className="App">
      <Instruction isOpen={instructionOpen} toggleOpen={toggleInstruction} />
      <Tabs />
      {/*<Login/>*/}
    </div>
  );
}

export default App;
