import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3030;
const secret = 'secret123'; // ✅ Fixed typo

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // ✅ You need this for JSON requests (like from fetch or Postman)
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('test');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const isLoginOk = email === 'test' && password === 'test';

  if (isLoginOk) {
    jwt.sign({ email }, secret, (err, token) => {
      if (err) {
        res.status(403).send('Token signing failed');
      } else {
        res.json({ token });
      }
    });
  } else {
    res.status(403).send('Invalid credentials'); // ✅ Fixed chaining mistake
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
