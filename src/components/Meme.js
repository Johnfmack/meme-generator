import React, {useState} from "react";
import memesData from "../data/memesData.js";

const Meme = () => {
let url;

const [memeImage, setMemeImage] = useState('https://i.imgflip.com/30b1gx.jpg')
   
const [meme, setMeme] = useState({
                                             topText:'toptop',
                                             bottomText:'bottom',
                                             randomImage:'https://i.imgflip.com/30b1gx.jpg'}
                                             )

const [allMemeImages, setAllMemeImages] = useState(memesData);

function handleChange(event){
  const {name, value} = event.target 
    setMeme(prevMeme => {
      return {
        ...prevMeme, [name]: value
      }
    })


}

  function getMemeImage() {

  
    //   console.log('you did something')
    //var memeLength = memesData.data.memes.length;
    //   console.log(memeLength);
    //var randomNum = Math.floor(Math.random() * memeLength);
    //   console.log(randomNum)
    //var randomMeme = memesData.data.memes[randomNum];
    //console.log(randomMeme);
    //  console.log(memesData);
    //const url = randomMeme[randomNum].url;
    //console.log(url);


const memesArray = allMemeImages.data.memes;
const randomNumber = Math.floor(Math.random() * memesArray.length)
url = memesArray[randomNumber].url
setMeme(prevMeme => ({
    ...prevMeme, randomImage: url
}))
console.log(url)
setMemeImage(url)
  }

//   function handleChange(){
//       console.log(topTxt.target.value);
//   }

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
  );
};

export default Meme;
