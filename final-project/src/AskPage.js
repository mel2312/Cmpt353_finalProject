import styled from "styled-components"
import Header1 from "./Header1";


const Container = styled.div`
    padding:30px 20px;
`;

const QuestionTittleInput = styled.input`
    background: none;
    border: 1px solid #777;
    border-radius: 3px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10 px;
    margin-bottom: 20px;
`;

const QuestionBodyTextArea= styled.textarea`
    background: none;
    border: 1px solid #777;
    border-radius: 3px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10 px;
    min-height: 200px;
`;
export default function AskPage(){
    return(
        <Container>
            <Header1>Ask a Question</Header1>
            <QuestionTittleInput type="text" placeholder= "Title of your question"/>
            <QuestionBodyTextArea placeholder="Type your description of your question here"/>
        </Container>
    )
}