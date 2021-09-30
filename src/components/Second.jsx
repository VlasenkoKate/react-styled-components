import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import cat2 from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/125230-aleni.png"
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

function SecondAnswer() {
  const [secondAnswer, setSecondAnswer] = useState("");

  const secondAnswerHandler = (e) => {
    setSecondAnswer(e.target.value);
  };

  const history = useHistory();
  const navigateTo = () => {
    if (secondAnswer === "Сельской вокзал") {
      history.push("/third");
    } else {
      history.push("/sorry");
    }
  };

  return (
    <Wrapper>
      <Title>
        {" "}
        Хостел на краю Пшемысля, сеновал в Житомирской области или сельской
        вокзал?
        <Top>
        <Icon>
          <IconImg src={cat2} alt="" />
        </Icon>
      </Top>


В каком самом странном месте ночевал Андрей? {" "}
      </Title>
      <SignForm>
        <Select
          id="select"
          onChange={(e) => secondAnswerHandler(e)}
          value={secondAnswer} 
          >
          <option value="Хостел в попе коня">Хостел в попе коня</option>
          <option value="Сеновал">Сеновал</option>
          <option value="Сельской вокзал">Сельской вокзал</option>
        </Select>
        <Router></Router>
        <SignButton onClick={navigateTo}>Ответить</SignButton>
      </SignForm>
    </Wrapper>
  );
}

export default SecondAnswer;
