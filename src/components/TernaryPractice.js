import React from 'react';

const TernaryPractice = () => {
  
  const isGoingOut = false;

 // original 
//   let answer
//   if(isGoingOut === true){
//       answer = "Yes"
//   } else {
//       answer = "no"
//   }
  
 // using ternary 

 let answer = ''
 isGoingOut ? answer = "Yes" : answer = "No" 


 // provided soluton

 let answer2 = isGoingOut ? "Yes" : "No"
  
    return (
     <>
     <div className="state">
         <h1 className="state--title">Going out tonight?</h1>
    <div className="state--value">{answer}</div>

    <div className="state--value">{answer2}</div>

    <div className="state--value">tern  v 3 {isGoingOut ? "Yes" : "No" }</div>
    </div>

    </>
    )

};

export default TernaryPractice;
