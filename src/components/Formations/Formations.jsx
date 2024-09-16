import Formation from "./Formation"

function Formations() {
  let firstEntreprise = {
    title: 'HTML',
    date: '2000 - 2001',
    description: 'Développement de sites web.' 
  }

  let secondEntreprise = {
    title: 'CSS',
    date: '2048 - 2049',
    description: 'Conception d’interfaces utilisateurs.' 
  }

  return (
    <>
        <h1>Formations</h1>
        <div className="student-card">
          <Formation data={firstEntreprise} />
          <Formation data={secondEntreprise} />
        </div>
    </>
  )
}

Formations.propTypes = {String}

export default Formations
