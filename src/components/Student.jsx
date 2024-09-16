const Student = ({name, lastName, avatar, campus, devLanguage, isFromRi7}) => {
  return (
    <div className="card">
        <h3>{name} {lastName}</h3>
        <img src={avatar}/>
        <p>{campus} : {devLanguage}</p>
        {isFromRi7 ? <button onClick={() => alert(`Bonjour je m'appelle ${name}`)}>ICI</button> : null}
    </div>
  )
}

export default Student