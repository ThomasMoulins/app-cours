import Project from './Project'

const Projects = () => {
  const projects = [
    {
      title: 'Outil de veille',
      date: '2023 - 2023',
      description: 'Outil principal' 
    },
    {
      title: 'app react',
      date: '2024 - 2025',
      description: 'Début du projet' 
    }
  ]

  return (
    <>
        <h1>Projects</h1>
        <div className="student-card">
        {
            projects.map((value, index)=>(
              <Project key={index} title={value.title} date={value.date} description={value.description} />
            ))
          }
        </div>
    </>
  )
}

Projects.propTypes = {String}

export default Projects
