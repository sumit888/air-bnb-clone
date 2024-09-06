
import starIcon from "../assets/star.png"

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="profile" className="card--image" />
            <div className="card--stats">
                <img src={starIcon} alt="star" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card

