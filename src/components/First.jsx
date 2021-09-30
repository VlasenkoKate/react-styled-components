import React, { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {Link, useHistory } from "react-router-dom";
import cat1 from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/bae04acf98b9be5f18f48e8ff4428b54.png";
import {
  Wrapper,
  SignForm,
  Top,
  Icon,
  IconImg,
  Title,
  Input,
  SignButton,
} from "./StyledComp.js";

function FirstAnswer() {
  const [firstAnswer, setFirstAnswer] = useState("");

  const firstAnswerHandler = (e) => {
    setFirstAnswer(e.target.value)
  }


  const history = useHistory()
    const navigateTo = () => {
 if (firstAnswer == 'Ананас') {
      history.push('/second')  
        }
        else {
       history.push('/sorry')
        }
    }
    
  return (
    <Wrapper>
      <Title> Кто-то не любит волосатые персики, кто-то - кислые апельсины, а кто-то - работать в техподдержке. 
      <Top>
        <Icon>
          <IconImg src={cat1} alt="" />
        </Icon>
      </Top>
         Какой фрукт ненавидит Андрей? </Title>
      <SignForm>
        <Input
          onChange={(e) => firstAnswerHandler(e)}
          type="text"
          required
          value={firstAnswer}
        ></Input>
      <Router></Router>
      <SignButton type = "button" onClick={navigateTo}>Ответить</SignButton> 
</SignForm>
    </Wrapper> 
  );
}

export default FirstAnswer;
