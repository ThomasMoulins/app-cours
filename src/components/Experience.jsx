function Experience(props) {
  return (
    <div className="card">
      <h3>{props.data.title} - {props.data.company}</h3>
      <p>{props.data.date}</p>
      <p>{props.data.description}</p>
    </div>
  );
}

export default Experience;
