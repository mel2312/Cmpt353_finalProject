import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Question from './Questions';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AskPage from './AskPage'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&family=Roboto:ital,wght@0,300..900;1,100..900&display=swap');
  body {
    background: #2d2d2d;
    color: #fff;
    font-family: Roboto, sans-serif;
  }
    b,strong{
    font-weight: 700;
    }
    a{
      color: #fff;
    }
    p{
      margin: 10px 0;
      line-height:1.5rem;
    }
    
    blockquote{
      background-color: rgba(0,0,0,.1)
      padding: 15px;
      border-raidus: 4px;

    }
    h1,h2{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    h1{
      font-size: 1.8rem;
    }
    
    h2{
      font-size:1.6 rem;
    }

`;
function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles/>
      
      
      <Router>
        <Header/>
        <Routes>
          <Route path='/ask' Component={AskPage}/>
          <Route path='/' Component={Question} />
        </Routes>
      </Router>
    </div>
      
  );
}

export default App;
