import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

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
      <header>
        <a href ="" className="logo">Q and A</a>
        <form action="" className="search">
          <input type="text" placeholder="Search..."/>
        </form>
        <a href = "" className="profile">Melwin</a>
     </header>
    </div>
      
  );
}

export default App;
