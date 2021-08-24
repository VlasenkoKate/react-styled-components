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
  LinksWrapper,
  LinkText,
  Footer
} from "./StyledComp.js";
import icon from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/20-homework/src/assets/padlock.png";

function SignIn() {
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [emailSignIn, setEmailSignIn] = useState("");

  const emailHandler = (e) => {
    const checkEmail = /^\S{3,}@\S{2,}\.\D{2,}/;
    setEmailSignIn(e.target.value);

    if (!checkEmail.test(e.target.value)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "green";
    }
  };

  const passwordHandler = (e) => {
    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}/;
    setPasswordSignIn(e.target.value);

    if (!checkPassword.test(e.target.value)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "green";
    }
  };
  const history = useHistory()
  const navigateTo = () => history.push('/success');

  return (
    <Wrapper>
      <Top>
        <Icon>
          <IconImg src={icon} alt="" />
        </Icon>
      </Top>
      <Title> Sign in</Title>
      <SignForm>
        <Input
          onChange={(e) => emailHandler(e)}
          type="email"
          placeholder="Email *"
          required
          value={emailSignIn}
        ></Input>
        <Input
          onChange={(e) => passwordHandler(e)}
          type="password"
          placeholder="Password *"
          required
          value={passwordSignIn}
        ></Input>
      <CheckBoxContainer>
        <CheckBox type="checkbox" />
        <CheckBoxText>Remember me</CheckBoxText>
      </CheckBoxContainer>
      <Router></Router>
      <SignButton onClick={navigateTo}>SIGN IN</SignButton> 
<LinksWrapper> 
<Link to="/sorry" style={{textDecoration: 'none'}}><LinkText>Forgot password</LinkText></Link>
<Link to="/sign_up" style={{textDecoration: 'none'}}><LinkText>Don't have an account? Sign Up</LinkText></Link>
</LinksWrapper> 
<Footer>Copyright © YourWebsite 2021
</Footer> 
</SignForm>
    </Wrapper> 
  );
}

export default SignIn;
