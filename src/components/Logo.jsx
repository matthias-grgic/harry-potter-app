import styled from "styled-components"
import "/src/images/hogwarts-logo.png"

function Logo() {
    return (
        <StyledDiv>
            <StyledLogo src="src/images/hogwarts-logo.png" alt="" />
            <StyledHeadline2>Harry Potter Fanclub</StyledHeadline2>
        </StyledDiv>
    )
}
export default Logo

const StyledLogo = styled.img`
    width: 150px;
    text-align: center;
    margin: 10px;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledHeadline2 = styled.h4`
    margin: 1rem;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-family: "Harry Potter", sans-serif;
    &:hover {
        color: var(--Hufflepuff);
    }
`