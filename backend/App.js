const express = require('express');
const cors = require('cors');
require('dotenv').config(); // .env 파일에서 키를 읽어오려면

const app = express();
app.use(cors()); // 모든 도메인 허용(개발용)
app.use(express.json()); // JSON 바디 파싱

// 예: 단순 테스트용 엔드포인트
app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// 음악 추천 API 예시 라우트
app.post('/recommend', async (req, res) => {
  try {
    const { userAnswers } = req.body; 
    // userAnswers: 클라이언트가 보내는 퀴즈 답변들

    // TODO: API 키가 필요한 로직 수행 (예: Gemini, Spotify 등)
    // 1. process.env.MY_SPOTIFY_KEY 같이 .env에 저장된 키로 Spotify API 호출
    // 2. AI API 호출 (Gemini/OpenAI) 해서 다음 질문 생성 or 분석 로직
    // 3. 결과(음악 리스트 or 질문) 만들어서 res.json(...)으로 클라이언트에게 반환

    res.json({ message: '추천 성공', data: {/* recommended playlist */} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
