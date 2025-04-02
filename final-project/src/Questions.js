import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import { Link } from "react-router-dom";

const StyledHeader = styled.h1`
    font-size: 1.8rem;

`;

const HeaderRow = styled.div`
    display:grid;
    grid-template-columns: 1fr min-content;
    padding:30px 20px;

`;

const BlueButton = styled(Link)`
    background-color: #378ad3;
    color: #fff;
    border:0;
    border-raidus: 5px;
    padding: 12px 10px;
    text-decoration: none;

`;




function Question(){
    return(
        <main>
            <HeaderRow>
                <StyledHeader>Questions</StyledHeader>
                <BlueButton>Ask&nbsp;Question</BlueButton>
            </HeaderRow>         
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            <QuestionRow/>
            
        </main>
    
    );
}
export default Question