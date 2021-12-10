import styled from "styled-components";

function CharacterCard({ student }) {
  // const [ stateImage, setStateImage ] =useState(false);
  //   src={stateImage ? 'one image' : 'another image'}

  const studentProps = student.map((student, index) => (
    <SectionContainer>
      <StyledImage src={student.image} alt="Kein Foto" />
      <StyledArticle>
        <StyledHeadline>{student.name}</StyledHeadline>
        <p>{student.house}</p>
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
  border: ${(props) => (props.student.house.Gryffindor ? "2px solid black" : props.student.house.Slytherin ? "2px solid red" : props.student.house.Hufflepuff ? "2px solid yellow" : null)};
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
