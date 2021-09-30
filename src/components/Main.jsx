import React from "react";
import {
    SuccessSorryImg,
    SuccessSorryWrapper, 
    Title, 
    SignButton
} from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/components/StyledComp.js"
import img from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/ддддд.png"
import { useHistory } from "react-router-dom";


export default function Main() {

    const history = useHistory()
    const navigateTo = () => 
      history.push('/first')  

    return (
        <SuccessSorryWrapper>
        <Title>
       Привет, красотка! 
       Прошло время проверить, как хорошо ты знаешь своего мужчину! 
       <SuccessSorryImg src={img}/>
       <br />
       Ответь на несколько вопросов, чтобы идти дальше!
      </Title>
      <SignButton type = "button" onClick={navigateTo}>Начааааааать</SignButton> 
            </SuccessSorryWrapper>
        
    )
}