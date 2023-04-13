import './App.css';
// react imports
import React, {useState, useEffect} from 'react';


function App() {

  // 1 - useState
  const [counter, setCounter] = useState(0)


  // 2 - useEffect

  const [ueText, setUeText] = useState('')

  const [ueCount, setUECount] = useState(0)

  useEffect(() => {

    setUECount(ueCount + 1)

    setUeText('Use effect ran ' + ueCount  + ' times')
    
  }, [counter])

  // 2 - useEffect 2: Electric boogaloo


  return (
    <>
      <h1> Hello world 🌍</h1>

      <h2> useState </h2>
      <p> {counter} </p>
      <button onClick={ () => setCounter(counter - 1)}> - </button>
      <button onClick={ () => setCounter(counter + 1)}> + </button>

      <h2> useEffect </h2>
      <p> {ueText} </p>

      <h2> useEffect - API example </h2>
      <p> Check the console</p>

      <h2> useReducer </h2>

      <h2> useRef </h2>

      <h2> useCallback </h2>

      <h2> useMemo </h2>

      <h2> useContext </h2>

    </>
  );
}

export default App;
