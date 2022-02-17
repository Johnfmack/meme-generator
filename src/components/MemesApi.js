import React, {useState, useEffect} from "react";



const MemesApi = () => {
    let url;


useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data))
},[])



const [memeImage, setMemeImage] = useState('https://i.imgflip.com/30b1gx.jpg')
   
const [meme, setMeme] = useState({
                                             topText:'toptop',
                                             bottomText:'bottom',
                                             randomImage:'https://i.imgflip.com/30b1gx.jpg'}
                                             )

const [allMemes, setAllMemes] = useState(meme);

function handleChange(event){
  const {name, value} = event.target 
    setMeme(prevMeme => {
      return {
        ...prevMeme, [name]: value
      }
    })


}

  function getMemeImage() {

  
const memesArray = allMemes.data.memes;
const randomNumber = Math.floor(Math.random() * memesArray.length)
url = memesArray[randomNumber].url
setMeme(prevMeme => ({
    ...prevMeme, randomImage: url
}))

setMemeImage(url)
  }

  return (
    <main>
    <div className="form">
      <input type="text" 
         placeholder="Top Text"
         className="form--input"
         name='topText'
         onChange={handleChange}
         value={meme.topText}
          />
      <input type="text"
         placeholder="Bottom Text"
         className="form--input"
         name='bottomText'
         onChange={handleChange}
         value={meme.bottomText}
         />

      <button className="form--button" onClick={getMemeImage}>
        get a new meme image
      </button>
    </div>
    <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image"/>
       <h2 className="meme--text top"> {meme.topText}</h2>
       <h2 className="meme--text bottom"> {meme.bottomText}</h2>

    </div>
  </main>
  )
}

export default MemesApi   