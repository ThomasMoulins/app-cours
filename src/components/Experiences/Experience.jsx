const Experience = ({title, company, date, description}) => {
  return (
    <div className="card">
      <h3>{title} - {company}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}

export default Experience;
