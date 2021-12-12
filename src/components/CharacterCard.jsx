import styled from "styled-components";
import LogoG from "/src/assets/gryffindor.png";
import LogoH from "/src/assets/hufflepuff.png";
import LogoS from "/src/assets/slytherin.png";
import LogoR from "/src/assets/ravenclaw.png";

function CharacterCard({ student }) {
  const studentProps = student.map((student, index) => (
    <SectionContainer color={student.house}>
      <StyledImage src={student.image ? student.image : "src/assets/nopic.jpg"} />
      <StyledArticle>
        <StyledHeadline>{student.name}</StyledHeadline>
        <HouseLogo color={student.house} />
        <P_Styled>{student.house}</P_Styled>
        <P_Styled>Patronus: {student.patronus}</P_Styled>
        <P_Styled>Ancestry: {student.ancestry}</P_Styled>
        <P_Styled>Actor: {student.actor}</P_Styled>
      </StyledArticle>
    </SectionContainer>
  ));
  return <div>{studentProps}</div>;
}

export default CharacterCard;

const StyledHeadline = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0.5rem 0 0.3rem 0;
`;

const StyledImage = styled.img`
  width: 115px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1rem;
  background-color: ${(student) =>
    student.color === "Gryffindor" ? "var(--Gryffindor)" : student.color === "Slytherin" ? "var(--Slytherin)" : student.color === "Hufflepuff" ? "var(--Hufflepuff)" : student.color === "Ravenclaw" ? "var(--Ravenclaw)" : null};
`;

const StyledArticle = styled.article`
  justify-content: top;
  margin-left: 1rem;
  font-size: 1rem;
  text-align: left;
  color: white;
`;

const P_Styled = styled.p`
  margin: 0;
  text-transform: capitalize;
`;

const HouseLogo = styled.div`
  background-image: ${(props) => (props.color === "Gryffindor" ? `url(${LogoG})` : props.color === "Slytherin" ? `url(${LogoS})` : props.color === "Hufflepuff" ? `url(${LogoH})` : props.color === "Ravenclaw" ? `url(${LogoR})` : null)};
  background-repeat: no-repeat;
  background-size: contain;
  width: 70px;
  height: 70px;
  margin-bottom: 0.6rem;
`;
