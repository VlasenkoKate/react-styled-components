import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import cat3 from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/_NqcsTS6ce8bDnBNVQXbnNW2X0qXIAZRFjeCB64C3BI.png"
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

function ThirdAnswer() {
  const [thirdAnswer, setThirdAnswer] = useState("");

  const thirdAnswerHandler = (e) => {
    setThirdAnswer(e.target.value);
  };

  const history = useHistory();
  const navigateTo = () => {
    if (thirdAnswer === "Баян") {
      history.push("/fourth");
    } else {
      history.push("/sorry");
    }
  };

  return (
    <Wrapper>
      <Title>
        {" "}
        Андрей неплохо барабанит на гитаре, хоть и играет в стесняшку. 
        <Top>
        <Icon>
          <IconImg src={cat3} alt="" />
        </Icon>
      </Top>


На каком еще инструменте он умеет играть? {" "}
      </Title>
      <SignForm>
        <Select
          id="select"
          onChange={(e) => thirdAnswerHandler(e)}
          value={thirdAnswer} 
          >
          <option value="Укулеле">Укулеле</option>
          <option value="Баян">Баян</option>
          <option value="Пианино">Пианино</option>
        </Select>
        <Router></Router>
        <SignButton onClick={navigateTo}>Ответить</SignButton>
      </SignForm>
    </Wrapper>
  );
}

export default ThirdAnswer;
