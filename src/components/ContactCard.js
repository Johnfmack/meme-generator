import React, {useState} from 'react';



const ContactCard = () => {
const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
})

function toggleFavorite() {
    console.log("toggle fave")
}

  return (
    <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/star-empty.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt="contact"
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
                
            </article>
        </main>
   
  )
};

export default ContactCard;
