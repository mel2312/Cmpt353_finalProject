import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Question from './Questions';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&family=Roboto:ital,wght@0,300..900;1,100..900&display=swap');
  body {
    background: #2d2d2d;
    color: #fff;
    font-family: Roboto, sans-serif;
  }
`;
function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles/>
      <Header/>
      <Question/>
    </div>
      
  );
}

export default App;
