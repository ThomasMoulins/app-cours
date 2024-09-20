import { useEffect, useRef, useState } from 'react'

const Like = () => {
  const [likes, setLikes] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    setLikes(likes => likes + 1)
  }

  const handleMouseDown = () => {
    handleClick();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        handleClick();
      }, 100);
    }, 500);
  };
  
  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Arrête l'intervalle
      intervalRef.current = null; // Reset la référence de l'intervalle
    }
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Annule le délai si on relâche le bouton avant 500ms
        timeoutRef.current = null;
      }
  };

  // Nettoyer l'intervalle quand le composant est démonté
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <p>{likes}</p>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >+</button>
    </>
  )
}

export default Like