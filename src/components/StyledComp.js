import styled from "styled-components";


export const Wrapper = styled.div`
width: 400px;
height: 445px;
margin: 40px auto;
display: flex;
flex-direction: column;
background-color: black;
`;

export const SignForm = styled.form`
width: 290px;
height: 400px;
padding: 5px;
display: flex;
flex-direction: column;
margin: auto;
`
export const Top = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const Icon = styled.div`
width: 40px;
height: 40px;
background-color: pink;
border-radius: 50%;
display: flex;
justify-content: center;
margin-top: 30px;
`
export const IconImg = styled.img`
width: 20px;
height: 20px;
margin: auto;
`
export const Title = styled.p`
font-size: 20px;
margin: 10px auto 20px auto;
text-align: center;
color: white;
`

export const Input = styled.input`
  height: 40px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  margin-bottom: 20px;
  color: white;
  padding-left: 7px;
`

export const CheckBoxContainer = styled.div`
display: flex;
justify-content: left;
`
export const CheckBox = styled.input`
margin-right: 10px;
`

export const CheckBoxText = styled.p`
color: white;
font-size: 13px;
`

export const SignButton = styled.button`
margin-top: 30px;
background-color: lightskyblue;
font-weight: 500;
font-size: 13px;
color: black;
padding: 5px;
height: 27px;
border-radius: 5px;
margin-bottom: 15px;
box-shadow: none;
`
export const LinksWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const LinkText = styled.p`
color: lightskyblue;
font-size: 10px;
align-content: flex-end;
`

export const Footer = styled.p`
color: lightgrey;
font-size: 10px;
margin: auto;
margin-top: 35px;
`

export const SuccessSorryImg = styled.img`
width: 300px;
margin: auto;


`
export const SuccessSorryWrapper = styled.div`
margin-top: 100px;
display: flex;
justify-content: center;
`

export const NameWrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const InputName = styled.input`
  height: 40px;
  width: 130px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  margin-bottom: 20px;
  color: white;
  padding-left: 7px;
`