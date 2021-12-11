import CharacterCard from "./CharacterCard"

function CharacterGesammelt({students}) {
    
     const studentCards = students.map((student) => (<CharacterCard name={student.name} house={student.house} patronus={student.patronus} eyeColour={student.eyeColour} image={student.image}/>))   
    
    return (
        <div>
        {studentCards}
        </div>
    )
}

export default CharacterGesammelt
