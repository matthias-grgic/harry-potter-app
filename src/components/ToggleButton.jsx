import styled from "styled-components";
import { useState } from "react";
import './ToggleButton.css';

function ToggleButton ({house, patronus, eyeColour }) {
  const [cardVisibility, setCardVisibility] = useState(false);
  function toggleCard() {
    setCardVisibility(!cardVisibility);
  }

  function Card({ cardVisibility }) {
    const cardClass = cardVisibility ? "" : "hidden";
    return (
    <article className={cardClass}>
      <StyledList>House: {house}</StyledList> <br/>
      <StyledList>Patronus: {patronus}</StyledList> <br/> 
      <StyledList>Eyecolour: {eyeColour}</StyledList>
    </article>
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
margin-top: 0px;
line-height: 1px;
`;

const StyledButton = styled.button`
margin-bottom: 20px;
padding: 5px;  
`;
  
