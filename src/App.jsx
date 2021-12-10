import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((studentsFromApi) => {
        const allStudents = studentsFromApi.map((student) => ({
          name: student.name,
          house: student.house,
          patronus: student.patronus,
          eyeColour: student.eyeColour,
          image: student.image,
        }));
        setStudents(allStudents);
      });
  }, []);

  function CharacterCards(props) {
    return (
      <section>
        <ul>{allStudents}</ul>
      </section>
    );
  }

  return (
    <div className="App">
      <CharacterCards name={allStudents} />
    </div>
  );
}

export default App;
