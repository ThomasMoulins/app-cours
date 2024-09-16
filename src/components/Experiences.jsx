function Experiences(props) {
  return (
    <>
        <h2>{props.titre}</h2>
        <h3>{props.description}</h3>
    </>
  )
}

Experiences.propTypes = {String}

export default Experiences
