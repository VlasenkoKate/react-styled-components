import styled from "styled-components";


export const Wrapper = styled.div`
width: 330px;
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
width: 150px;
height: 150px;
border-radius: 50%;
display: flex;
justify-content: center;
margin-top: 10px;
`
export const IconImg = styled.img`
max-width: 150px;
max-height: 150px;
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
export const Select = styled.select`
  height: 40px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  margin-bottom: 20px;
  color: white;
  padding-left: 7px;
`


export const SignButton = styled.button`
margin-top: 20px;
height: 50px;
background-color: lightskyblue;
font-weight: 500;
font-size: 18px;
color: black;
border-radius: 5px;
margin-bottom: 15px;
box-shadow: none;
`

export const SuccessSorryImg = styled.img`
width: 300px;
margin: auto;


`
export const SuccessSorryWrapper = styled.div`
width: 330px;
padding-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
`

export const LinkText = styled.p`
color: lightskyblue;
font-size: 23px;
text-align: center;
`

export const NameWrapper = styled.div`
display: flex;
justify-content: space-between;
`
