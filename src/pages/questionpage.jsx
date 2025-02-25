import React from 'react';
import './questionpage.css';


function QuestionPage() {
  return (
    <body>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"></link>
        <div className="question-container">
            <p className="question">How Would You Describe Your Feeling in Color?</p>
        </div>
        <div className="middle">
            <div className="options-container">
                <div className="option" ><div className="number">1</div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number">2</div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number">3</div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number">4</div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
            </div>
        </div>
    </body>
    
  );
}

export default QuestionPage;