function Projects(props) {
  return (
    <>
        <h2>{props.titre}</h2>
        <h3>{props.description}</h3>
    </>
  )
}

Projects.propTypes = {String}

export default Projects
