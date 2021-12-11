import styled from "styled-components";
import { useState } from 'react';
import { createGlobalStyle } from "styled-components";
//import "./CharacterCard.css"

function CharacterCard({ name, house, patronus, eyeColour, image }) {
  // const [ stateImage, setStateImage ] =useState(false);
  //   src={stateImage ? 'one image' : 'another image'}
  
const [cardVisibility, setCardVisibility] = useState(false)
//const cardClassHidden = cardVisibility ? "":"hidden" 
//console.log(cardVisibility)

function ToggleCard (props){
setCardVisibility(!cardVisibility) 

}

function Button({index}){

  return(
    <button onClick = {ToggleCard}>Show Me!</button>
  )
}


//console.log(augenFarbeBack)

  return (
  
  <div>
     <>
    <SectionContainer >
      <StyledImage src={image} alt="Kein Foto" />
      <StyledArticle color={eyeColour} cardVisibility={cardVisibility}>
        <StyledHeadline>{name}</StyledHeadline>
        <p>{house}</p>
        <p>{patronus}</p>
        <p>{eyeColour}</p>
      </StyledArticle>
    </SectionContainer>
    <Button />
   
    </>



  </div>
  
  )
}

export default CharacterCard;

const StyledImage = styled.img`
  height: 200px;
  
`;

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
`;

const StyledArticle = styled.article`
  margin-left: 1rem;
  font-size: 1rem;
  text-align: left;
  display: ${props => props.cardVisibility ? 'block':'none'};
  background-color: ${props => props.color ? props.color:'red'};
  

`;
  // background-color: ${(color) => color.augenFarbeBack};
const StyledHeadline = styled.p``;
