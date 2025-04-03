import { useState } from 'react';
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
import userContext from './UserContext'
function App() {
  
  const [user,setUser] = useState(null);
  return (
    <div>
      <Reset />
      <GlobalStyles/>
      
      
      <Router>
        <userContext.Provider value={{user}}>
        <Header/>
        <Routes>
          <Route path='/ask' Component={AskPage}/>
          <Route path='/' Component={Question} />
        </Routes>
        </userContext.Provider>
        
      </Router>
    </div>
      
  );
}

export default App;
