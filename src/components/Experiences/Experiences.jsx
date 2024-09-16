import Experience from "./Experience"

const Experiences = () => {
  const experiences = [
    {
      title: 'Développeur Web',
      company: 'Entreprise A',
      date: '2020 - 2022',
      description: 'Développement de sites web.' 
    },
    {
      title: 'Designer UI',
      company: 'Entreprise B',
      date: '2018 - 2020',
      description: 'Conception d’interfaces utilisateurs.' 
    }
  ]

  return (
    <>
        <h1>Expériences</h1>
        <div className="student-card">
          {
            experiences.map((value, index)=>(
              <Experience key={index} title={value.title} company={value.company} date={value.date} description={value.description} />
            ))
          }
        </div>
    </>
  )
}

Experiences.propTypes = {String}

export default Experiences
