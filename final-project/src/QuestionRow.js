import styled from "styled-components";

const QuestionStat= styled.div`
    text-align: center;
    display: inline-block;
    font-size: 1.2rem;
    color:#aaa;
    margin-top: 7px;
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
    margin-right: 5px;
    background-color: #3e4a52;
    color: #9cc3db;
    padding: 7px;
    border-raidus: 4px;
    font-size: .9rem;
    
`;

const QuestionLink = styled.a`
    text-decoration: none;
    color: #3ca4ff;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px
`;

const StyledQuestionRow = styled.div`
    background-color: rgba(225,225,225,.5)
    padding: 15px 15px 10px;
    display: grid;
    grid-template-columns: repeat(3,50px) 1fr; 
    border-top: 1px solid #555;
`;

const WhoandWhen = styled.div`
    display: inline-block;
    color: #aaa;
    font-size: .8rem;
    float: right;
    padding: 10px 0;
`;

const Userlink = styled.a`
    color: #3ca4ff;

`; 

function QuestionRow(){
    return(
        <StyledQuestionRow>
                <QuestionStat>0 <span>votes</span></QuestionStat>
                <QuestionStat>0 <span>answers</span></QuestionStat>
                <QuestionStat>0 <span>views</span></QuestionStat>
                <QuestionTitleArea>
                    <WhoandWhen>Asked by  some time ago <Userlink>Melwin</Userlink>
                    </WhoandWhen>
                    <QuestionLink>Message of the channels</QuestionLink>
                    <Tag>Tag1</Tag>
                    <Tag>Tag2</Tag>
                </QuestionTitleArea>
        </StyledQuestionRow>
    
    );

}

export default QuestionRow