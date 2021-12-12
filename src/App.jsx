import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";
import Logo from "./Logo";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  // console.log(students);
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
            actor: student.actor,
            ancestry: student.ancestry,
          };
        });
        setStudents(allStudents);
      });
  }, []);

  return (
    <StyledMainDiv>
      <Logo />
      <StyledHeadline2>HOGWARTS STUDENTS</StyledHeadline2>
      <CharacterCard student={students} />
    </StyledMainDiv>
  );
}

export default App;

const StyledHeadline2 = styled.h4`
  margin: 1rem;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-family: "Harry Potter", sans-serif;
`;

// const StyledButton = styled.button`
//   color: #000000;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid black;
//   border-radius: 15px;
//   background: transparent;
// `;

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  background-image: url("/src/assets/background_hogwarts.jpeg");
`;
