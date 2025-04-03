import { Reset } from 'styled-reset';
import Header from './Header';
import Question from './Questions';
import GlobalStyles from './GlobalStyles';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AskPage from './AskPage'

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
