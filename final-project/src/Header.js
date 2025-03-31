import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboardQuestion} from '@fortawesome/free-solid-svg-icons'


import styled from "styled-components";


const StyledHeader = styled.header`
background-color : #393939;
box-shadow : 0 3px 3px rgba(0,0,0,.2)  
display: grid;
grid-template-columns: 200px 4fr 200px;
`;

const LogoLink = styled.a`
color: #fff;
text-decoration: none;
display : inline-block;
height: 50px;
line-height: 50px;
padding: 0 15px;
b{
    font-weight: bold;    
}
`;

function Header(){
    return(<StyledHeader>
        <LogoLink href ="" className="logo">
        <FontAwesomeIcon icon= {faClipboardQuestion} />
            <b>Q and A</b></LogoLink>
        <form action="" className="search">
          <input type="text" placeholder="Search..."/>
        </form>
        <a href = "" className="profile">Melwin</a>
     </StyledHeader>
     );
}

export default Header;