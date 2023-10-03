import './Card.css'
function Card(props){
    return(
        <div className='card'>

            <div className='containerCard'>
                    <img src={props.imgSrc}></img>
                    <h2>Full Name : {props.fullName}</h2>
                    <h3>Bio : {props.bio}</h3>
                    <h3>Profession: {props.profession}</h3>

                    <button>More information</button>
                
            </div>
        </div>
    )
}
export default Card