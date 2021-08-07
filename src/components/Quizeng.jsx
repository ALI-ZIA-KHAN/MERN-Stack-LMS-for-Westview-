import { useState} from 'react'
import { Card, Button ,ProgressBar} from 'react-bootstrap';
import './Quiz.css';

import Modelgen from './Modal';
import { Link, useHistory } from 'react-router-dom';




function Quizeng(){

  const history=useHistory();
    const [qNo, setQno] = useState(0);
    const [questions, setquestions] = useState([
      {
        "question": "Our country name ______  Pakistan",
        "options":
          ["are",
            "is",
            "it"],
        "correct answer": "is"
  
      }, {
        "question": "I ______ a watch",
        "options":
          ["is",
            "were",
            "have"],
        "correct answer": "have"
  
      },
      {
        "question": "Second form of go is ______",
        "options":
          ["go",
            "went",
            "gone"],
         "correct answer": "went"
      },
      {
        "question": "They ______ playing.",
        "options":
          ["is",
            "have",
            "are"],
        "correct answer": "are"
      },
      {
        "question": "u is a ______ ",
        "options":
          ["vowel",
            "consonant",
            "number"],
        "correct answer": "vowel"
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

export default Quizeng;