import Experience from "./Experience"

function Experiences(props) {
  let firstEntreprise = {
    title: 'Développeur Web',
    company: 'Entreprise A',
    date: '2020 - 2022',
    description: 'Développement de sites web.' 
  }

  let secondEntreprise = {
    title: 'Designer UI',
    company: 'Entreprise B',
    date: '2018 - 2020',
    description: 'Conception d’interfaces utilisateurs.' 
  }

  return (
    <>
        <Experience data={firstEntreprise} />
        <Experience data={secondEntreprise} />
    </>
  )
}

Experiences.propTypes = {String}

export default Experiences
