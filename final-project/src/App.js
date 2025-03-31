import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  body {
    background: #2d2d2d;
    color: #fff;
  }
`;
function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles/>
      <Header/>
      
    </div>
      
  );
}

export default App;
