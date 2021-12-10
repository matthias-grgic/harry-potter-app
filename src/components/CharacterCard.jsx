import styled from "styled-components";
import { useState } from 'react';
import { createGlobalStyle } from "styled-components";
//import "./CharacterCard.css"

function CharacterCard({ student, index }) {
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



  const studentProps = student.map((student, index) => (
    


    
    <>
    <SectionContainer>
      <StyledImage src={student.image} alt="Kein Foto" />
      <StyledArticle prop={cardVisibility}>
        <StyledHeadline>{student.name}</StyledHeadline>
        <p>{student.house}</p>
        <p>{student.patronus}</p>
        <p>{student.eyeColour}</p>
      </StyledArticle>
    </SectionContainer>
    <Button index={index}/>
   
    </>
    
  ));

  return (
  
  <div>{studentProps}
    
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
  display: ${({cardVisibility}) ? 'block':'none'}
`;

const StyledHeadline = styled.p``;
