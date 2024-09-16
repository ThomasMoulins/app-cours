import Formation from "./Formation"

const Formations = () => {
  const formations = [
    {
      title: 'HTML',
      date: '2000 - 2001',
      description: 'Développement de sites web.' 
    },
    {
      title: 'CSS',
      date: '2048 - 2049',
      description: 'Conception d’interfaces utilisateurs.' 
    }
  ]

  return (
    <>
        <h1>Formations</h1>
        <div className="student-card">
          {
            formations.map((value, index)=>(
              <Formation key={index} title={value.title} date={value.date} description={value.description} />
            ))
          }
        </div>
    </>
  )
}

Formations.propTypes = {String}

export default Formations
