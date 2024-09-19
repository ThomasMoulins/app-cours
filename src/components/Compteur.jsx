import { useReducer } from "react";
import styled from "styled-components";

const initalCompteur = {count : 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'mindecrement':
            return {count: state.count - 0.1};
        case 'reset':
            return {count: 0};
        case 'exposant':
            return {count: Math.pow(state.count, 2)};
        case 'arrondisup':
            return {count: Math.ceil(state.count)};
        default :
        throw new Error();
    }
}

const Button = styled.button `
    margin: 0 0.5rem;
`

const Compteur = () => {
    
  const [state, dispatch] = useReducer(reducer, initalCompteur);
    
  return (
    <>
        <h1>{state.count}</h1>
        <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
        <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
        <Button onClick={() => dispatch({type: 'mindecrement'})}>- 0.1</Button>
        <Button onClick={() => dispatch({type: 'reset'})}>RESET</Button>
        <Button onClick={() => dispatch({type: 'exposant'})}>n²</Button>
        <Button onClick={() => dispatch({type: 'arrondisup'})}>n^</Button>
    </>
  )
}

export default Compteur