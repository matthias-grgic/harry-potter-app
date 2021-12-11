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
    <div onClick={handleClick} className="card card__inner is-flipped card__face card__face--front">
      <SectionContainer>
        <StyledArticle>
          <h2 className="card__header">{student.name}</h2>
        </StyledArticle>
      </SectionContainer>
    </div>

    <div onClick={handleClick} className="card card__inner is-flipped card__face card__face--back">
      <SectionContainer>
        <StyledImage className="pp" src={student.image} />
        <StyledArticle className="card__content">
          <h2>{student.name}</h2>
          <p>{student.house}</p>
          <p>{student.patronus}</p>
          <p>{student.eyeColour}</p>
        </StyledArticle>
      </SectionContainer>
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
`;

