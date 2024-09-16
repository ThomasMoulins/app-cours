import Formation from "./Formation"

function Formations(props) {
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
        <Formation data={firstEntreprise} />
        <Formation data={secondEntreprise} />
    </>
  )
}

Formations.propTypes = {String}

export default Formations
