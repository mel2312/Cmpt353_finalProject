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
    padding: 12px 10px;

`;

const QuestionRow = styled.div`
    background-color: rgba(225,225,225,.1)
    padding: 15px 15px;
    display: grid;
    grid-template-columns: repeat(3,50px) 1fr; 


`;

const QuestionStat= styled.div`
    text-align: center;
    display: inline-block;
    font-size: 1.2rem;
    span{
        font-size: .7rem;
        display:block;
        font-weight: 300;
        margin-top: 4px;

        }
`;

const QuestionTitleArea = styled.div`
    padding: 0 30px;
`;

const Tag = styled.span`
    display: inline-block;
    margin-right: 3px;
    background-color: #3e4a52
    color: #9cc3db
`;

function Question(){
    return(
        <main>
            <HeaderRow>
                <StyledHeader>Questions</StyledHeader>
                <BlueButton>Ask&nbsp;Question</BlueButton>
            </HeaderRow>         
            <QuestionRow>
                <QuestionStat>0 <span>votes</span></QuestionStat>
                <QuestionStat>0 <span>answers</span></QuestionStat>
                <QuestionStat>0 <span>views</span></QuestionStat>
                <QuestionTitleArea>Message of the channels</QuestionTitleArea>
            </QuestionRow>
            
        </main>
    
    );
}
export default Question