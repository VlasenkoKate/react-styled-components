import React from "react";
import {
    SuccessSorryImg,
    SuccessSorryWrapper, 
    Title,
    LinkText
} from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/components/StyledComp.js"
import img from "/Users/ekaterinavlasenko/Desktop/vjgv/Pes_DR/src/assets/5430624-cat-friendly-properties-happy-cat-free-transparent-png-happy-cat-png-820_678.png"
import { Link } from "react-router-dom";


export default function SuccessPage() {
    return (
        <SuccessSorryWrapper>
            <SuccessSorryImg src={img}/>
            <Title>
      Вооооооу, полегче! 

      Чтоб все так знали своих мужчин, как ты! 
      Лови ссылку на локацию и мчи за новыми впечатлениями!
      </Title>
      <a href="https://goo.gl/maps/xMEHhMAPzcG2Kscu5" style={{textDecoration: 'none'}}><LinkText>Погнали!</LinkText></a>
      
      </SuccessSorryWrapper>
        
    )
}