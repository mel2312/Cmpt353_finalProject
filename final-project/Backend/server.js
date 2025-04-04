import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3030;
const secret = 'secret123'; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('test');
});

app.get('/profile',(req,res)=>{
  const token = req.cookies.token;
  jwt.verify(token,secret,(err,data)=>{
    if(err){
      res.status(403).send()
    }
    else{
      res.json(data).send()
    }
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const isLoginOk = email === "test@example.com" && password === "test";

  if (!isLoginOk) {
    return res.status(403).send("Invalid login");
  }

  jwt.sign({ email }, secret, (err, token) => {
    if (err) {
      return res.status(500).send("Token generation failed");
    }

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: false 
    }).send("Login successful");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
