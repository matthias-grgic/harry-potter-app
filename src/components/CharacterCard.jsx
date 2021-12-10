import styled from "styled-components";

function CharacterCard({ student }) {
  // const [ stateImage, setStateImage ] =useState(false);
  //   src={stateImage ? 'one image' : 'another image'}

  const studentProps = student.map((student, index) => (
    <SectionContainer>
      <StyledImage src={student.image} alt="Kein Foto" />
      <StyledArticle>
        <h2>{student.name}</h2>
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
  height: 250px;
`;
const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  background-color: ;
`;

const StyledArticle = styled.article`
  margin-left: 1rem;
  font-size: 1rem;
`;
