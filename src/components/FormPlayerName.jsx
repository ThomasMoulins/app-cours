import { useState } from "react"

function FormPlayerName() {
  const [name, setName] = useState('');

  return (
    <>
      <label>Player name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}

export default FormPlayerName