import styled from "styled-components";


const StyledHeader = styled.header`
background-color : #393939;
`;
function Header(){
    return(<StyledHeader>
        <a href ="" className="logo">Q and A</a>
        <form action="" className="search">
          <input type="text" placeholder="Search..."/>
        </form>
        <a href = "" className="profile">Melwin</a>
     </StyledHeader>
     );
}

export default Header;