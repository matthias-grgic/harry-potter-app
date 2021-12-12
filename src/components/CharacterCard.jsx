import styled from "styled-components";
import ToggleButton from "./ToggleButton";

function CharacterCard({student}) {

  const studentProps = student.map((student, index) => (
    <SectionContainer key={index}>
      <StyledImage src={student.image} alt="Kein Foto" style={{border: student.house === "Gryffindor" ? "4px solid var(--Gryffindor)" : student.house === "Slytherin" ? "4px solid var(--Slytherin)" : student.house === "Hufflepuff" ? "4px solid var(--Hufflepuff)" : student.house === "Ravenclaw" ? "4px solid var(--Ravenclaw)" : "4px solid black"}}/>
      <StyledArticle>
        <StyledHeadline>{student.name}</StyledHeadline>
        <ToggleButton house={student.house} patronus={student.patronus} eyeColour={student.eyeColour}/>
      </StyledArticle>
    </SectionContainer>
  ));

  return (
  <div>{studentProps} 
  </div>
  );
}

export default CharacterCard;

const StyledImage = styled.img`
  height: 200px;
  padding: 1px;
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

const StyledHeadline = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 8px;
`;