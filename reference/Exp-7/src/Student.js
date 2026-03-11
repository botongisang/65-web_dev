function Student(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Class: {props.className}</h3>
    </div>
  );
}

export default Student;
