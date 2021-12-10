function CharacterCard({ student }) {
  const studentProps = student.map((student, index) => (
    <section>
      <h2>{student.name}</h2>
      <li>{student.house}</li>
      <li>{student.patronus}</li>
      <li>{student.eyeColour}</li>
      <div>{student.image}</div>
    </section>
  ));

  return <div>{studentProps}</div>;
}

export default CharacterCard;
