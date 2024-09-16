function Student(props) {
  return (
    <div className="card">
        <h3>{props.data.name} {props.data.lastName}</h3>
        <img src={props.data.avatar}/>
        <p>{props.data.campus} : {props.data.devLanguage}</p>
        {props.data.isFromRi7 ? <button onClick={() => alert('Bonjour je m\'appelle')}>ICI</button> : null}
    </div>
  )
}

export default Student