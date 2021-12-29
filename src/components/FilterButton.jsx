function FilterButton ({ onFilterStudents }) {
    
    const handleFilterCards = (event) => {
        // Funktionen können gleich heißen, wenn sie in untersch. Dateien liegen
        // handleFilterCards wird aufgerufen, wenn ein value im DropDown ausgewählt wird
        onFilterStudents(event.target.value)
        // Aufruf der handleFilterStudents-Funktion hinter der "Maske" onFilterStudents
        //
    }
    
    return (
    <div>
        <select onChange={handleFilterCards}>
            <option value="">Filter</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </div>
    )
}

export default FilterButton;
