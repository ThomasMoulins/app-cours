function Student(props) {
  return (
    <div className="card">
        <h3>{props.name} {props.lastName}</h3>
        <img src={props.avatar}/>
        <p>{props.campus} : {props.devLanguage}</p>
        {props.isFromRi7 ? <button onClick={() => alert('Bonjour je m\'appelle')}>ICI</button> : null}
    </div>
  )
}

export default Student
