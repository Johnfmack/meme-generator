import React, {useState} from 'react';

const StatePractice2 = () => {
const [isGoingOut, setIsGoingOut] = useState(true)

function flipIt(){
    console.log('flip state')
    setIsGoingOut(!isGoingOut)
}

function flipIt2(){
    setIsGoingOut(prevState => !prevState)
}


  return (
    <div className="state">
    <h1 className="state--title">Do I feel like going out tonight? (state practice 2)</h1>
    <div className="state--value" onClick={flipIt}>
        <h1>{isGoingOut ? "Yes" : "No"}  </h1>
    </div>
    <p>using arrow func</p>
    <div className="state--value" onClick={flipIt2}>
        <h1>{isGoingOut ? "Yes" : "No"}  </h1>
    </div>
</div>
  
  )
};

export default StatePractice2;
