import styled from "styled-components";
import { useState } from "react";

function ToggleButton ({house, patronus, eyeColour }) {
  
  const [cardVisibility, setCardVisibility] = useState(false);
  function toggleCard() {
    setCardVisibility(!cardVisibility);
  }

  function Card({ cardVisibility }) {
    return (
    <StyledArticle cardVisibility={cardVisibility}>
      <StyledList>House: {house}</StyledList> <br/>
      <StyledList>Patronus: {patronus}</StyledList> <br/> 
      <StyledList>Eyecolour: {eyeColour}</StyledList>
    </StyledArticle>
    );
  }

  const buttonText = cardVisibility ? "Hide Information" : "Show Information";

  return (
    <div>
      <StyledButton onClick={toggleCard}>{buttonText}</StyledButton>
      <Card cardVisibility={cardVisibility} />
    </div>
  );
}

export default ToggleButton;

const StyledList = styled.li`
list-style: none;
font-size: 1rem;
line-height: 5px;
`;

const StyledButton = styled.button`
background-color: lightgray;
border-radius: 5px;
border: 2px solid black;
padding: 3px;
margin-bottom: 15px;
&:hover {
  background-color: #6d0000;
  color: white;}
`;

const StyledArticle = styled.article`
  visibility: ${props => props.cardVisibility ? 'visible' : 'hidden' }
`;


  
