import Project from './Project'

function Projects() {
  let firstProject = {
    title: 'Outil de veille',
    date: '2023 - 2023',
    description: 'Outil principal' 
  }

  let secondProject = {
    title: 'app react',
    date: '2024 - 2025',
    description: 'Début du projet' 
  }

  return (
    <>
        <h1>Projects</h1>
        <Project data={firstProject} />
        <Project data={secondProject} />
    </>
  )
}

Projects.propTypes = {String}

export default Projects
