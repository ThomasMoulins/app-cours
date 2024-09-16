const Formation = ({title, date, description}) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Formation;
  