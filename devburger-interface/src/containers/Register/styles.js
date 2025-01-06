import styled from "styled-components";
import { Link as ReactLink} from "react-router-dom";

import BackgroundLogin from '../../assets/Background-login.jpg'
import Background from '../../assets/Group 195.png'

export const Container =  styled.div`
display: flex;
height: 100vh;
width: 100vw;

`
export const LeftContainer =  styled.div`
background: url('${BackgroundLogin}');
background-size:cover;
background-position: center;
height: 100%;
width: 100%;
max-width: 50%;
display:flex ;
align-items: center;
justify-content: center;

img{
    width: 80%;
}

`

export const RightContainer =  styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 100%;
max-width: 50%;
background: url('${Background}');
background-color:rgba(30, 30, 30, 0.91);

p{
    color: white;
    font-weight: 600;
    
}
a{
    cursor: pointer;
    text-decoration: underline;
}




`
export const Title =  styled.h2`
  font-family: "Road Rage", sans-serif ;
  font-size: 40px;
  color: #9758a6;

 

`
export const Form =  styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
max-width: 400px;
width: 100%;


`
export const InputContainer =  styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
}

label{
    font-size: 15px;
    font-weight: 400;
    color: white;
}
P{
    font-size: 12px;
    color: #cf3057;
    line-height:80%;
    height: 10px;
    font-weight: 600;
}

`
export const Link = styled(ReactLink)`
text-decoration: none;
color: white;


`




