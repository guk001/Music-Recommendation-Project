import React from 'react';
import './questionpage.css';


function QuestionPage() {
  return (
    <body>
        <div className="question-container">
            <p className="question"><b>오늘 하루 기분을 색깔로 표현한다면?</b></p>
        </div>
        <div className="middle">
            <div className="options-container">
                <div className="option" ><div className="number"><b>1</b></div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number"><b>2</b></div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number"><b>3</b></div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
                <div className="option" ><div className="number"><b>4</b></div><div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div></div>
            </div>
        </div>
    </body>
    
  );
}

export default QuestionPage;