import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Logo from "./components/Logo";


function App() {
  const [students, setStudents] = useState([]);

  // console.log(students);
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
  
const [favouriteStudents, setFavouriteStudents] = useState([])

function addToFavourites(student){
  if(favouriteStudents.some((favStudent)=> favStudent.id===student.id)){
    const favToKeep= favouriteStudents.filter((favStudent)=> favStudent.id!==student.id)
  setFavouriteStudents(favToKeep)
}else{
setFavouriteStudents([...favouriteStudents, student])
}
}
//console.log(favouriteStudents)
const [studentsFilteredByHouse, setStudentsFilteredByHouse] = useState([])
const [favStudentsFilteredByHouse, setFavStudentsFilteredByHouse]= useState([])
const [selected, setSelcted]= useState('all')

function filterCharArray (house){
if (house === 'all'){
setStudentsFilteredByHouse([])
setFavStudentsFilteredByHouse([])
setSelcted(house)
}else {
const newSortedArray = students.filter((everyStudent)=> everyStudent.house === house)
setStudentsFilteredByHouse (newSortedArray)
const newFavSortedArray = favouriteStudents.filter((everyFavStudent)=>everyFavStudent.house === house)
setFavStudentsFilteredByHouse(newFavSortedArray)
setSelcted(house)
}}


//console.log(studentsFilteredByHouse)




// const [searchedStudent, setSearchedStudent] = useState()
// const [inputValue, setInputValue] = useState()
// function searchStudent(event){
// const searchString = event.target.value
// setInputValue (searchString)
// const namedStudent = students.filter((oneStudent)=> oneStudent.name.includes(searchString))
// setSearchedStudent(namedStudent)
// }

const studentsToRender =  studentsFilteredByHouse.length>0 ? studentsFilteredByHouse:students
const favStudentsToRender = favStudentsFilteredByHouse.length>0 ? favStudentsFilteredByHouse : favouriteStudents 

// const studentsToRender2 = searchedStudent?searchedStudent:students

// console.log(studentsToRender)
// console.log(favStudentsToRender)

  return (
    <div>
      <header>
      <Headline>
        <Link to="/"> <Logo/></Link>
      </Headline>

      <NavLinkStyle>
        <NavLink to="characterCard">Charactercards</NavLink>
        <NavLink to="favouriteCharacter">Favourite Characters</NavLink>
      </NavLinkStyle>
      <label htmlFor="sort"> Show by House:
      <select name='sort' id='sort' value={selected} onChange ={()=> filterCharArray(sort.value)} >
      <option value="all">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>

      </select>
      </label>
      {/* <label htmlFor="input"> Namensuche
      <input type='text' name='input' onInput={searchStudent} value={inputValue}/> */}



      {/* </label> */}
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
          path="characterCard"
          element={<CharacterCard student={studentsToRender} onAddToFavourites={ addToFavourites } favouriteStudents={ favouriteStudents }/>}
        />
        <Route
          path="favouriteCharacter"
          element={<CharacterCard student={favStudentsToRender} onAddToFavourites={ addToFavourites } favouriteStudents={ favouriteStudents }/>}
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