const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 1) CORS 미들웨어 적용 (모든 출처 허용)
app.use(cors());

// 2) 요청 바디를 JSON과 텍스트로 파싱하는 미들웨어
app.use(express.json());
app.use(express.text());

// 3) 서버에서 관리할 데이터 초기화
let data = { message: '여러분 화이팅!' };

// 4) GET 요청 처리 - 데이터 응답
app.get('/', (req, res) => {
  res.json(data);
});

// 5) POST 요청 처리 - 데이터 새로 저장
app.post('/', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// 6) PUT 요청 처리 - 데이터 업데이트
app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// 7) DELETE 요청 처리 - 데이터 삭제
app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

// 8) 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
