import React, {useState} from 'react';

const Things = () => {
    const [things, setThings] = useState(["thing 1 ", "thing 2"])


    function greeting(name){
        const date = new Date()
        const hours = date.getHours()
        console.log(hours)
        let timeOfDay  
        if(hours > 4 && hours < 12){
            timeOfDay = 'morning' 
        } else if (hours > 12 && hours < 17){
            timeOfDay = 'afternoon'
        } else if (hours > 17 && hours < 20){
            timeOfDay = 'evening'
        } else {
            timeOfDay = 'night'
        }

        return `Good ${timeOfDay}, ${name}`
    
        
       
    }

    console.log(greeting("john"))

//const thingsArray = ["thing 1 ", "thing 2"]

function addItem(){

 //  let howLong = things.length;
 //  console.log(howLong); 
 //  console.log('trying to add')
 //things.push(`thing' ${things.length + 1 }`)
 //  console.log(things);

 const newThingText = `Thing ${things.length + 1}`
setThings(prevState => [...prevState, newThingText])
}


const thingsElements = things.map(things => {
   return <p key={things}>{things}</p>
})

  return (
      <>
        <div>{thingsElements}</div>
        <button onClick={addItem}>Add Item</button>
      </>
        )
          
};

export default Things;
