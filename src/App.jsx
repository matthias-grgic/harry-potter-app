import { useEffect, useState } from "react";


function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then((response) => response.json())
      .then((studentsFromApi) => {
        const allStudents = studentsFromApi.map((student) => ({
          name: student.name,
        }));

        console.log(allStudents)

        setStudents(allStudents)
      });
      
  }, []);

  return (
    <div className="App">
      
    </div>
  )
}

export default App
