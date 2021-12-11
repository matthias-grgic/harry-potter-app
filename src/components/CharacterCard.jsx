import styled from "styled-components"
import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import ReactDOM from "react-dom"

function CharacterCard({ student }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div className="card card__inner is-flipped card__face card__face--front">
      <SectionContainer>
        <StyledImage src={student.image} alt="Kein Foto" />
        <StyledArticle>
          <p>{student.name}</p>
        </StyledArticle>
      </SectionContainer>
      <button onClick={handleClick}>Click to flip</button>
    </div>

    <div className="card card__inner is-flipped card__face--back">
      <SectionContainer>
        <StyledImage src={student.image} alt="Kein Foto" />
        <StyledArticle>
          <p>{student.name}</p>
          <p>{student.house}</p>
          <p>{student.patronus}</p>
          <p>{student.eyeColour}</p>
        </StyledArticle>
      </SectionContainer>
      <button onClick={handleClick}>Click to flip</button>
    </div>
  </ReactCardFlip>
}

export default CharacterCard;

const StyledImage = styled.img`
  display: flex;
  max-height: 200px;
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
`;

