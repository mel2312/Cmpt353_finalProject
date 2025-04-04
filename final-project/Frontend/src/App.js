import { useEffect, useState } from 'react';
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
import LoginPage from './LoginPage';
import axios from 'axios';
function App() {
  
  const [user,setUser] = useState(null);
  function checkAuth() {
    axios.get('http://localhost:3030/profile', {withCredentials:true})
        .then(response => {
          setUser(
            response.data
          )
        })
        .catch(() => {
          setUser(null);
        });
    }

    useEffect(() => {
      checkAuth();
    }, []);
  


  return (
    <div>
      <Reset />
      <GlobalStyles/>
      
      
      <Router>
        <userContext.Provider value={{user,checkAuth}}>
        <Header/>
        <Routes>
          <Route path='/ask' Component={AskPage}/>
          <Route path='/' Component={Question} />
          <Route path = '/login' Component={LoginPage}/>
        </Routes>
        </userContext.Provider>
        
      </Router>
    </div>
      
  );
}

export default App;