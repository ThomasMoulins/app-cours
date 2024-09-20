import { useState } from 'react'

function useToggle(initialValue = false) {

  const getToggle = () => {
    return initialValue;
  };

  const [isToggle, setIsToggle] = useState(getToggle());

  const saveToggle = () => {
    setIsToggle(istoggle => !istoggle);
  };

  return {
    setIsToggle: saveToggle,
    isToggle
  }
}

export default useToggle