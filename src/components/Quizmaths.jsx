import { useState} from 'react'
import { Card, Button ,ProgressBar} from 'react-bootstrap';
import './Quiz.css';

import Modelgen from './Modal';
import { Link, useHistory } from 'react-router-dom';




function Quizmath(){

  const history=useHistory();
    const [qNo, setQno] = useState(0);
    const [questions, setquestions] = useState([
      {
        "question": "2 + 3 = ______",
        "options":
          ["6",
            "5",
            "4"],
        "correct answer": "5"
  
      }, {
        "question": "27 is ______ number",
        "options":
          ["even",
            "odd",
            "prime"],
        "correct answer": "odd"
  
      },
      {
        "question": "2 x 9 = ______",
        "options":
          ["18",
            "11",
            "81"],
         "correct answer": "18"
      },
      {
        "question": "Result of 9 + (-8) -1 + 1______",
        "options":
          ["-1",
            "0",
            "1"],
        "correct answer": "1"
      },
      {
        "question": "52 is  ______ than 63",
        "options":
          ["greater",
            "lesser",
            "equal"],
        "correct answer": "lesser"
      }
    ])
    const [score,setScore] = useState(0);
    const [QuizCompleted,SetCompleted] = useState(false);
    const nextQuestion = () => {
      if (questions.length === qNo + 1) {
        SetCompleted(true);
        var a=document.getElementsByClassName('options_have');
        a.className +=' disappear'

  
      } else {
        setQno(qNo + 1)
      }
    }
    const getSelectedOption = (e) => {
      let selectedOption = e.target;
      if (selectedOption.innerText === questions[qNo]['correct answer']) {
        setScore(score + Math.round(100/questions.length));
  
      }
    }


    const routeChange=()=>{
      history.push(
        {
          pathname:'/quizscore',
          state:score
        }
      )
    }
    return(
        <>



<div className="quiz_whole">


<div className="quiz_heading">
  <h1>Quiz App</h1>
</div>

<div className="quiz_qno">
  <h2>QUESTION NO {qNo + 1} OF {questions.length}</h2>
</div>
<div className="actual_que">
  <h3>{questions[qNo].question}</h3>
  {questions[qNo].options.map((option, index) => {
              return (
                <Button key={index} onClick={getSelectedOption} id={index} className="m-3 options_have" variant="primary">{option}</Button>
              )
            })}
</div>
<div className="foo_quiz">
{ 
          QuizCompleted === false ? <Button variant="success" onClick={nextQuestion}>Next</Button> 
          : 
          <>
          {<ProgressBar now={score} label={`${score}%` }/>  }
          {/* <Link to={"/quizscore"}> View Score </Link> */}
           <Button variant="primary" onClick={routeChange}>View Score</Button>
          </>
          }
</div>

</div>
{/* 




         <div className="App">
      <Card className="text-center">
        <Card.Header>QUIZ APP</Card.Header>
        <Card.Body>
          <Card.Title>QUESTION NO {qNo + 1} OF {questions.length}</Card.Title>
          <hr />
          <Card.Text>
            <h3>{questions[qNo].question}</h3>
            {questions[qNo].options.map((option, index) => {
              return (
                <Button key={index} onClick={getSelectedOption} id={index} className="m-3 options_have" variant="primary">{option}</Button>
              )
            })}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
      
          { 
          QuizCompleted === false ? <Button variant="success" onClick={nextQuestion}>Next</Button> 
          : 
          <>
          {<ProgressBar now={score} label={`${score}%` }/>  }
          <Link to={"/quizscore"}> View Score </Link>
           <Button variant="primary" onClick={routeChange}>View Score</Button>
          </>
          }




       
       


        </Card.Footer>
      </Card>
    </div> 

    {/* /** wave**/ }

    {/* <svg viewBox="0 0 1250 300">
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(250, 33, 87)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(255, 107, 38)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(23, 221, 106)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(251, 255, 35)"/>
</svg> */}



<div className ="waves">
  <svg viewBox="0 0 1250 300">
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(250, 33, 87)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(255, 107, 38)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(23, 221, 106)"/>
      <path fill-opacity="0.7" d="
      M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500
      " fill="rgb(251, 255, 35)"/>
  </svg>
</div>






        </>
    )
}

export default Quizmath;