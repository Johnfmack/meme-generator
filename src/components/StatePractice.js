import React, {useState} from 'react';

const StatePractice = () => {
    const [greet, setGreet] = useState('hello') 
    const [counter, setCounter] = useState(0);
   
function handleClick(){
    setGreet("no yo's today sorry")
}

function handlePlus(){
   setCounter(prevCount => prevCount + 1)
}

function handleMinus(){
    setCounter(prevCount => prevCount - 1)
}

  return (
      <>
       <div>{greet}</div>
       <button onClick={handleClick}>change state</button>
       <button onClick={handlePlus}>plus 1</button>
       <button onClick={handleMinus}>minus 1</button>
       <h1>{counter}</h1>


       </>
  )
};

export default StatePractice;
