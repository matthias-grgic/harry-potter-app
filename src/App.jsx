import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import {saveToLocal, loadFromLocal} from './Library/localStorage';
import CharacterCard from "./components/CharacterCard";
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Logo from "./components/Logo";
import FilterButton from './components/FilterButton';

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([])

  const handleFilterStudents = (house) => {
    // event.target.value kommt hier rein mithilfe von onFilterStudents
    // d.h. house = event.target.value
    // wenn Gryffindor geklickt, ist house = Gryffindor
    if (house === '') {
      setFilteredStudents(students)
      // wenn Filter ausgewählt, zeige mir alle  
    } else {
      const updatedFilteredStudents = students.filter(student => student.house === house)
      setFilteredStudents(updatedFilteredStudents)
      // wenn ein house ausgewählt, filtere ursprüngliche students
      // Bsp. Auswahl Gryffindor
      // students.filter(Objekt Harry steht hier für student => Gryffindor(student.house === Gryffindor))
      // will wissen, ob ausgewähltes Haus mit dem Haus des jew. Studenten übereinstimmt
      // Harry kommt in updatedFilteredStudents, weil die Funktion checkt, dass Harrys house = ausgewähltes house ist
      // Check Draco Malfoy -> kommt nicht in updatedFilteredStudents, weil student.house (Slytherin) !=== Gryffindor, ergibt FALSE
      // setFilteredStudents auf die updatedFilteredStudents!!! 
    }
  }

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
  
  const localStorageFavouriteCharacters = loadFromLocal('_favouriteCharacters');
  const [favouriteCharacters, setFavouriteCharacters] = useState (localStorageFavouriteCharacters ?? []);

    useEffect(() => {
        saveToLocal('_favouriteCharacters', favouriteCharacters);
      }, [favouriteCharacters]);

      function addToFavourites (favouriteCharacterToAdd) {
        // bei KLICK auf das ICON startet diese function:
        if (favouriteCharacters.some(
            (everyFavouriteCharacter) =>
            everyFavouriteCharacter.id === favouriteCharacterToAdd.id)
            // Bsp. Hermine (ID=2), Ron (ID=3) ist in favouriteCharacters, dann Klick auf Harry (ID=1) ->
            // function geht favouriteCharacters-Array durch (Hermine (ID=2), Ron (ID=3) enthalten) & checkt ob Harrys ID(=1)
            // in dem favouriteCharacters-Array drin ist durch ===; in diesem fall FALSE (HARRYs ID=1 NOCH NICHT ENTHALTEN)!
            // weiter bei "else"
          ) {
          const updatedFavouriteCharacters = favouriteCharacters.filter(
            (everyFavouriteCharacter) =>
            everyFavouriteCharacter.id !== favouriteCharacterToAdd.id
            // wenn TRUE (Bsp. Harry (ID=1), Hermine (ID=2), Ron (ID=3) sind im favouriteCharacters-Array)
            // dann klick auf ICON bei Harry (ID=1) -> favouriteCharacter-Array wird gefiltert
            // jede ID der favouriteCharacters (Harry, Hermine, Ron) wird verglichen mit ID des geklickten Characters (HARRY)
            // alle IDs die NICHT der ID des geklickten Characters entsprechen, verbleiben im favouriteCharacters-Array
            // d.h. nur Character der geklickten ID fliegt wieder raus
            // Harry ID=1 (everyFavouriteCharacter) !== Harry ID=1 (favouriteCharacterToAdd) PRÜFUNG IST FALSE, WIRD RAUSGEFILTERT!!
          );
          setFavouriteCharacters(updatedFavouriteCharacters);

        } else {
        setFavouriteCharacters([...favouriteCharacters, favouriteCharacterToAdd]);
        // wenn FALSE -> ...favouriteCharacters(=HERMINE, RON) + favouriteCharacterToAdd(=HARRY)
        } 
      }

console.log(filteredStudents, filteredStudents.length)

  return (
    <div>
      <header>
      <Headline>
        <Link to="/"> <Logo/></Link>
      </Headline>

      <NavLinkStyle>
        <NavLink to="character-card">Charactercards</NavLink>
        <FilterButton onFilterStudents={handleFilterStudents} />
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
          element={
          <CharacterCard student={filteredStudents.length > 0 ? filteredStudents : students} onAddToFavourites={addToFavourites} favouriteCharacters={favouriteCharacters} />}
        />

        <Route
          path="favourite-characters"
          element={
          <CharacterCard student={favouriteCharacters} onAddToFavourites={addToFavourites} favouriteCharacters={favouriteCharacters}/>}
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
  .active {
    background-color: var(--Slytherin);
    color: var(--Hufflepuff);
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