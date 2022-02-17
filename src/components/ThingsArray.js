import React, {useState} from 'react';

const ThingsArray = () => {

    const [things, setThings] = useState(['jThing 1', 'jThing 2'])

function addItem(){
 // setThings(things + `Thing ${things.length + 1}`)
 const newThingText = `Thing ${things.length + 1}`
 setThings(prevState => [...prevState, newThingText])

}


  return ( <div>
    <button onClick={addItem}>Add Item</button>   
    {things}
  </div>
  )
};

export default ThingsArray;
