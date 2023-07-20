import React, { useState } from 'react'
import './quiz.css'
import { Button } from '@mui/material'
import { DoneAll } from '@mui/icons-material'
// import { Button } from 'bootstrap'
const SimpleQuizApp = () => {

    const Questions=[
        {
          QuestionText:"What is captial of the India?",
        AnswerQuestions:[
          { answerText:"Maharasta" ,iscurrect:false },
          { answerText:"Mumbai", iscurrect:false},
          {answerText:'Delhi',iscurrect:true },
          { answerText:"Kolkatta", iscurrect:false}
        ]
      },
      {
        QuestionText :"Who is the current Prime Minister?",
        AnswerQuestions:[
         { answerText:"Rahul Gandhi", iscurrect:false },
         { answerText:"Narendhra Modhi", iscurrect:true },
         {answerText:"Manmohan singh",iscurrect:false },
         { answerText:"atal Bihari",iscurrect:false}
        ]
      },
      {
        QuestionText:"Which year India won world cup at second time?",
        AnswerQuestions:[
          {answerText:'2006',iscurrect:false },
           { answerText:'2001',iscurrect:false},
           {answerText:"2011",iscurrect:true},
           {answerText:"2016", iscurrect:false}
        ]
      },
      {
        QuestionText:'Which company was created iPhone?',
        AnswerQuestions:[
          {answerText:"intel", iscurrect:false },
          {answerText:"Appel", iscurrect:true},
          {answerText:'Microsoft',iscurrect:false},
          {answerText:'Google',iscurrect:false}
        ]
      }
  ]
const [showScore,setShowscore]=useState(false)

const [score,setscore]=useState(0)

const [question,setNxtQuuestion]=useState(0)


const SelectAnswer=(iscurrect)=>{
     if(iscurrect){
        setscore(score+1);
     }
    //  console.log(Questions.length)
    if(question===Questions.length-1){
          setShowscore(true)
    }
    else{
      setNxtQuuestion(question+1)
      
    }
}

const retakeChanger=()=>{
    setNxtQuuestion(0)
    setscore(0)
    setShowscore(false)
}

const SubmitQuiz=(e)=>{
  console.log(e.target)
    setTimeout(() => {
      alert("Submit successfully!!!")
    }, 100);
}

  return (
    <div className="d-flex justify-content-center container">
        <div className="question-box">
             <div className="heading">
                 <span className='fs-3'>Questions {question+1}</span>/{Questions.length}
             </div>
             {showScore ? <div className='text-info m-5 fs-3'>
              Your score was {score} out of {Questions.length} <br /> <br />
              <div className='row'>
              <div className='col-md-6'>
              <Button variant='contained' color='secondary' onClick={()=>retakeChanger()}>Retake</Button> 
              </div>
              <div className='col-md-6'>
              <Button variant='contained' color='success' startIcon={<DoneAll/>} onClick={(e)=>SubmitQuiz(e)}>Submit</Button> 
              </div>
              </div>
             </div>:(
              <div className=''>
                 <div className='col Question'>
                 {Questions[question]?.QuestionText}
                 </div>
                 <div className='col'>
                    {Questions[question]?.AnswerQuestions.map((ans)=>{
                        return(
                         <div className='col'>
                          <br/>
                           <Button variant='contained' color='info' className='col-md-6' onClick={()=>SelectAnswer(ans.iscurrect)}>{ans.answerText}</Button>
                         </div>
                        )
                    })}
                 </div>
                  
              </div>
             )}
        </div>
    </div>
  )
}

export default SimpleQuizApp