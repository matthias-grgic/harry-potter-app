import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import {saveToLocal, loadFromLocal} from './Library/localStorage';
import CharacterCard from "./components/CharacterCard";
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Logo from "./components/Logo";

function App() {
  const [students, setStudents] = useState([]);
  /* console.log(students); */
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((studentsFromApi) => {
        const allStudents = studentsFromApi.map((student, index) => {
          return {
            id: index+1,
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

  console.log(students);
  
  const localStorageFavouriteCharacters = loadFromLocal('_favouriteCharacters');
  const [favouriteCharacters, setFavouriteCharacters] = useState (localStorageFavouriteCharacters ?? []);

    useEffect(() => {
        saveToLocal('_favouriteCharacters', favouriteCharacters);
      }, [favouriteCharacters]);

      function addToFavourites (favouriteCharacterToAdd) {
        if (favouriteCharacters.some(
            (everyFavouriteCharacter) =>
            everyFavouriteCharacter.id === favouriteCharacterToAdd.id
        )
          ) {
          const updatedFavouriteCharacters = favouriteCharacters.filter(
            (everyFavouriteCharacter) =>
            everyFavouriteCharacter.id !== favouriteCharacterToAdd.id
          );
          setFavouriteCharacters(updatedFavouriteCharacters);
        } else {
        setFavouriteCharacters([...favouriteCharacters, favouriteCharacterToAdd]);
        } 
      }

  return (
    <div>
      <header>
      <Headline>
        <Link to="/"> <Logo/></Link>
      </Headline>

      <NavLinkStyle>
        <NavLink to="character-card">Charactercards</NavLink>
        <NavLink to="favourite-characters">Favourite Characters</NavLink>
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
          path="character-card"
          element={<CharacterCard student={students} onAddToFavourites={addToFavourites} favouriteCharacters={favouriteCharacters} />}
        />

        <Route
          path="favourite-characters"
          element={<CharacterCard student={favouriteCharacters} onAddToFavourites={addToFavourites} favouriteCharacters={favouriteCharacters}/>}
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