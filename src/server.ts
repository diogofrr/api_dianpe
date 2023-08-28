import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: process.env.APP_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
