import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage() {
    const navigate = useNavigate();

    const QUESTIONS = [
      {
        text: "오늘 하루 기분을 색깔로 표현한다면 무엇일까?",
        choices: ["파란색", "빨간색", "노란색", "무채색"]
      },
      {
        text: "제일 좋아하는 음악 장르는 무엇인가요?",
        choices: ["팝", "록", "힙합", "발라드"]
      },
      {
        text: "요즘 가장 자주 듣는 노래 유형은?",
        choices: ["댄스곡", "슬픈 발라드", "차분한 재즈", "EDM"]
      },
      {
        text: "음악을 언제 주로 듣나요?",
        choices: ["아침", "점심", "저녁", "새벽"]
      },
      {
        text: "이번 주말에는 무엇을 하고 싶나요?",
        choices: ["파티 가기", "집에서 쉬기", "드라이브 하기", "운동하기"]
      }
    ];

    const[currentIndex, setCurrentIndex] = useState(0);
    const[userAnswers, setUserAnswers] = useState([]);

    const handleAnswer = (choice) => {
      setUserAnswers((prevAnswers) => [...prevAnswers, choice]);

      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigate('/playlist', {
          state: {
            answers: [...userAnswers, choice],
          },
        });
      }
    };

    const currentQuestion = QUESTIONS[currentIndex]

  return (
    <div style={{maxwidth: 500, margin: "0 auto", textAligh: "center"}}>
      <h1>Question Page</h1>
      <h2>Q{currentIndex +1}. {currentQuestion.text}</h2>
      <div style={{ margin: "20px 0" }}>
        {currentQuestion.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(choice)}
            style={{ display: "block", margin: "10px auto" }}
          >
            {choice}
          </button>
        ))}
      </div>

      <p>
        {currentIndex + 1} / {QUESTIONS.length} 질문
      </p>
    </div>
  );
}

export default QuestionPage;