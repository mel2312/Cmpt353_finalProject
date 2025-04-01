import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size: 1.8rem;

`;

const HeaderRow = styled.div`
    display:grid;
    grid-template-columns: 1fr min-content;
    padding:30px 20px;

`;

const BlueButton = styled.button`
    background-color: #378ad3;
    color: #fff;
    border:0;
    border-raidus: 5px;
    padding: 15px 10px;

`;

function Question(){
    return(
        <main>
            <HeaderRow>
                <StyledHeader>Questions</StyledHeader>
                <BlueButton>Ask&nbsp;Question</BlueButton>
            </HeaderRow>         
                
            
        </main>
    
    );
}
export default Question