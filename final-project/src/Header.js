import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboardQuestion} from '@fortawesome/free-solid-svg-icons'


import styled from "styled-components";


const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0,0,0,.2);
  display:grid;
  grid-template-columns: 200px 1fr 200px;
  grid-column-gap: 20px;
`;


const LogoLink = styled.a`
color: #fff;
text-decoration: none;
display : inline-block;
height: 50px;
line-height: 30px;
padding: 0px 15px;
svg{
margin-top: 10px;
display: inline-block;
float: left;
}
span{
    display: inline-block;
    padding-left: 5px;
    padding-top: 15px

}
b{
    font-weight: bold;    
}
`;

const SearchInput = styled.input`
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    border-raidus: 3px;
    border: 1px solid #777;
    background: rgba(0,0,0,.1);
    padding: 8px 10px;
    margin top: 9 px;
`;

function Header(){
    return(<StyledHeader>
        <LogoLink href ="" className="logo">
        <FontAwesomeIcon icon= {faClipboardQuestion}  size ="2x"/>
            <span>
            <b>Q and A</b>
            </span>
            </LogoLink>
        <form action="" className="search">
          <SearchInput type="text" placeholder="Search..."/>
        </form>
        <a href = "" className="profile">Melwin</a>
     </StyledHeader>
     );
}

export default Header;