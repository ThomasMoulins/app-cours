import { useState } from "react"

function ClickButton() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      {value > 0 && <button onClick={() => setValue(value - 1)}>-</button>}
      <button onClick={() => setValue(0)}>RESET</button>
    </>
  )
}

export default ClickButton