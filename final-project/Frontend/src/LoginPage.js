import { Component } from "react";
import Header1 from "./Header1"
import styled from "styled-components";
import StyledInput from "./StyledInput";
import BlueButton from "./BlueButton";
import axios from 'axios';

const Container = styled.div`
    padding: 30px 20px;
`;

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    login(){
        axios.post('http://localhost:3030/login',{
            email: this.state.email,
            password: this.state.password,

        })
    }
    render(){
    return(<>
    <Container>
        <Header1 style={{margin:0}}>Login</Header1>
        <StyledInput placeholder="email" type="email" value={this.state.email}
            onChange={ev => this.setState({email:ev.target.value})}
        />
        <StyledInput placeholder="password" type= "password" value={this.state.password}
            onChange={ev => this.setState({password:ev.target.value})}  
        />
        <BlueButton onClick={() => this.login()}>Login</BlueButton>
    </Container>
        
    </>);
    }
}

export default LoginPage