import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import cat4 from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/maxresdefault.png"
import {
  Wrapper,
  SignForm,
  Top,
  Icon,
  IconImg,
  Title,

  SignButton,
  Select,

} from "./StyledComp.js";

function FourthAnswer() {
  const [fourthAnswer, setFourthAnswer] = useState("");

  const fourthAnswerHandler = (e) => {
    setFourthAnswer(e.target.value);
  };

  const history = useHistory();
  const navigateTo = () => {
    if (fourthAnswer === "Сварить всмятку") {
      history.push("/success");
    } else {
      history.push("/sorry");
    }
  };

  return (
    <Wrapper>
      <Title>
        {" "}
        С оливье, борщом и варениками все понятно.  
        <Top>
        <Icon>
          <IconImg src={cat4} alt="" />
        </Icon>
      </Top>


А как надо приготовить яйца, чтобы Андрей поплыл? {" "}
      </Title>
      <SignForm>
        <Select
          id="select"
          onChange={(e) => fourthAnswerHandler(e)}
          value={fourthAnswer} 
          >
          <option value="Забабахать болтунью">Забабахать болтунью</option>
          <option value="Сварить всмятку">Сварить всмятку</option>
          <option value="Омлета будет достаточно">Омлета будет достаточно</option>
        </Select>
        <Router></Router>
        <SignButton onClick={navigateTo}>Ответить</SignButton>
      </SignForm>
    </Wrapper>
  );
}

export default FourthAnswer;
