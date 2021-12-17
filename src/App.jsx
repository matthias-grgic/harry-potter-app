import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Logo from "./components/Logo";

function App() {
  const [students, setStudents] = useState([]);
  console.log(students);
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((studentsFromApi) => {
        const allStudents = studentsFromApi.map((student) => {
          return {
            name: student.name,
            house: student.house,
            patronus: student.patronus,
            eyeColour: student.eyeColour,
            image: student.image,
          };
        });
        setStudents(allStudents);
      });
  }, []);

  return (
    <div>
      <header>
      <Headline>
        <Link to="/"> <Logo/></Link>
      </Headline>

      <NavLinkStyle>
        <NavLink to="CharacterCard">Charactercards</NavLink>
        <NavLink to="FavouriteCharacter">Favourite Characters</NavLink>
      </NavLinkStyle>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <StyledH2>
              Welcome to the best Harry Potter Fanpage in the world!
            </StyledH2>
          }
        />{" "}
        
        <Route
          path="CharacterCard"
          element={<CharacterCard student={students} />}
        />
      </Routes>

      
    </div>
  );
}

export default App;

const Headline = styled.h1`
  background-color: var(--Gryffindor);
  font-size: 2rem;
  text-align: center;
  a {
  text-decoration: none;
  }
`;

const NavLinkStyle = styled.a`
  
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  a {
    background-color: var(--Hufflepuff);
    border: 2px solid var(--Gryffindor);
    border-radius: 10px;
    color: var(--Gryffindor);
    text-decoration: none;
    padding: 0.5rem;
    &:hover {
    background-color: var(--Slytherin);
    color: var(--Hufflepuff);
    }
  }
`;

const StyledH2 = styled.h2`
  background-color: var(--Gryffindor);
  color: white;
  border-radius: 8px;
  border: 4px solid var(--Hufflepuff);
  text-align: center;
  margin: 1rem 3rem;
  padding: 0.8rem;
`;