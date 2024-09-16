function Formation(props) {
    return (
      <div className="card">
        <h3>{props.data.title}</h3>
        <p>{props.data.date}</p>
        <p>{props.data.description}</p>
      </div>
    );
  }
  
  export default Formation;
  