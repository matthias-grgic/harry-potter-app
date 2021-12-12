import styled from "styled-components";
import "/src/assets/hogwarts-logo.png";

function Logo() {
  return (
    <StyledDiv>
      <StyledLogo src="src/assets/hogwarts-logo.png" alt="" />
    </StyledDiv>
  );
}
export default Logo;

const StyledLogo = styled.img`
  width: 150px;
  text-align: center;
  margin: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
