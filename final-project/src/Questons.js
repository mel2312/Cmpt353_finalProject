import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size: 1.8rem;

`;

const HeaderRow = styled.div`
    display:grid;
    grid-template-columns: 1fr min-content;
    padding:30px 20px;

`;

function Question(){
    return(
        <main>
            <HeaderRow>
                <StyledHeader>Questions</StyledHeader>
                <button>Ask&nbsp;Question</button>
            </HeaderRow>         
                
            
        </main>
    
    );
}
export default Question