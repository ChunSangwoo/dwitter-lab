import express from "express";
import cors from "cors";

const PORT = 9000;
const app = express();

app.use(cors());
app.use(express.json());

//라우팅 추가

app.listen(PORT, () => {
  console.log(`서버 실행---> ${PORT}`);
});
