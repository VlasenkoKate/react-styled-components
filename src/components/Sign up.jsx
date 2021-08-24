import React, { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {Link, useHistory } from "react-router-dom";
import {
  Wrapper,
  SignForm,
  Top,
  Icon,
  IconImg,
  Title,
  Input,
  CheckBoxContainer,
  CheckBox,
  CheckBoxText,
  SignButton,
  InputName,
  NameWrapper,
  LinkText,
  Footer
} from "./StyledComp.js";
import icon from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/assets/padlock.png";

function SignIn() {
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [emailSignUp, setEmailSignUp] = useState("");
    const [firstNameSignUp, setFirstNameSignUp] = useState("");
    const [lastNameSignUp, setLastNameSignUp] = useState("");
  
    const emailHandler = (e) => {
      const checkEmail = /^\S{3,}@\S{2,}\.\D{2,}/;
      setEmailSignUp(e.target.value);
  
      if (!checkEmail.test(e.target.value)) {
        e.target.style.borderColor = "red";
      } else {
        e.target.style.borderColor = "green";
      }
    };
  
    const passwordHandler = (e) => {
      const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}/;
      setPasswordSignUp(e.target.value);
  
      if (!checkPassword.test(e.target.value)) {
        e.target.style.borderColor = "red";
      } else {
        e.target.style.borderColor = "green";
      }
    };

   const firstNamelHandler = (e) => {
    const checkName = /^.{3,}/;
    setFirstNameSignUp(e.target.value);

    if (!checkName.test(e.target.value)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "green";
    }
  };

  const lastNamelHandler = (e) => {
    const checkName = /^.{3,}/;
    setLastNameSignUp(e.target.value);

    if (!checkName.test(e.target.value)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "green";
    }
  };

    const history = useHistory()
    const navigateTo = () => history.push('/sign_in');
  
    return (
      <Wrapper>
        <Top>
          <Icon>
            <IconImg src={icon} alt="" />
          </Icon>
        </Top>
        <Title> Sign up</Title>
        <SignForm>
            <NameWrapper>
        <InputName
            onChange={(e) => firstNamelHandler(e)}
            type="text"
            placeholder="First Name *"
            required
            value={firstNameSignUp}
          ></InputName>
                  <InputName
            onChange={(e) => lastNamelHandler(e)}
            type="text"
            placeholder="Last Name *"
            required
            value={lastNameSignUp}
          ></InputName>
          </NameWrapper>
          <Input
            onChange={(e) => emailHandler(e)}
            type="email"
            placeholder="Email *"
            required
            value={emailSignUp}
          ></Input>
          <Input
            onChange={(e) => passwordHandler(e)}
            type="password"
            placeholder="Password *"
            required
            value={passwordSignUp}
          ></Input>
        <CheckBoxContainer>
          <CheckBox type="checkbox" />
          <CheckBoxText>I want to receive inspiration, marketing<br />
                        promotions and updates via email</CheckBoxText>
        </CheckBoxContainer>
        <Router></Router>
        <SignButton onClick={navigateTo}>SIGN UP</SignButton> 
  <Link to="/sign_in" style={{textDecoration: 'none', marginLeft: '130px' }}><LinkText>Already have an account? Sign in</LinkText></Link>
  <Footer>Copyright © YourWebsite 2021
  </Footer> 
  </SignForm>
      </Wrapper> 
    );
  }
  
  export default SignIn;
  
