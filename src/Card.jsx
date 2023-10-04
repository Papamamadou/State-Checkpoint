import { useState } from 'react'
import './Card.css'
function Card({fullName,bio,profession,imgSrc,shows}){
    const [ishow,setIshow] = useState(shows)

    const showYourSelf = () =>{
                setIshow(!ishow)
    }
    return(
        <div className='card'>
                {ishow ? 
                <div className='containerCard'>
                    <img src={imgSrc}></img>
                    <h2>Full Name : {fullName}</h2>
                    <h3>Bio : {bio}</h3>
                    <h3>Profession: {profession}</h3>

                <button onClick={showYourSelf}>More information{shows}</button>

                
            </div>
            : <div  className='containerCard'>
                You dont have rigth to see this content!!

                <button onClick={showYourSelf}>More information{shows}</button>

            </div>}
            
        </div>
    )
}
export default Card