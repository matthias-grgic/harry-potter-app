import styled from "styled-components";

function CharacterCard({student}) {
  // const [ stateImage, setStateImage ] =useState(false);
  //   src={stateImage ? 'one image' : 'another image'}

/*   const borderColor = (student) => {
    if (student.house === "Gryffindor") {
      border = "4px solid var(--Gryffindor)";
    } else if (student.house === "Slytherin") {
      border = "4px solid var(--Slytherin)";
    } else if (student.house === "Hufflepuff") {
      border = "4px solid var(--Hufflepuff)";
    } else if (student.house === "Ravenclaw") {
      border = "4px solid var(--Ravenclaw)";
    } 
  }; */

  const studentProps = student.map((student, index) => (
    <SectionContainer key={index}>
      <StyledImage style={{border: student.house === "Gryffindor" ? "4px solid var(--Gryffindor)" : student.house === "Slytherin" ? "4px solid var(--Slytherin)" : student.house === "Hufflepuff" ? "4px solid var(--Hufflepuff)" : student.house === "Ravenclaw" ? "4px solid var(--Ravenclaw)" : "4px solid black"}}src={student.image} alt="Kein Foto" />
      <StyledArticle>
        <StyledHeadline>{student.name}</StyledHeadline>
        <p >{student.house}</p>
        <p>{student.patronus}</p>
        <p>{student.eyeColour}</p>
      </StyledArticle>
    </SectionContainer>
  ));
  
  return <div>{studentProps}</div>;
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
`;

const StyledHeadline = styled.p``;
