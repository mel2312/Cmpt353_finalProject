import Header1 from "./Header1"
import styled from "styled-components";

const Container = styled.div`
    padding: 30px 20px;
`;

function LoginPage(){
    return(<>
    <Container>
        <Header1 style={{margin:0}}>Login</Header1>
    </Container>
        
    </>);
}

export default LoginPage