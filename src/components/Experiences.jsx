import Experience from "./Experience"

function Experiences() {
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
        <h1>Expériences</h1>
        <div className="student-card">
          <Experience data={firstEntreprise} />
          <Experience data={secondEntreprise} />
        </div>
    </>
  )
}

Experiences.propTypes = {String}

export default Experiences
