import Header1 from "./Header1"
import styled from "styled-components";
import StyledInput from "./StyledInput";
import BlueButton from "./BlueButton";

const Container = styled.div`
    padding: 30px 20px;
`;

function LoginPage(){
    return(<>
    <Container>
        <Header1 style={{margin:0}}>Login</Header1>
        <StyledInput placeholder="email" type="email"/>
        <StyledInput placeholder="password" type= "password"/>
        <BlueButton>Login</BlueButton>
    </Container>
        
    </>);
}

export default LoginPage