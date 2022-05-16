import './TinyEventCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyEventCard = ({ _id, title, image }) => {


    return (
        <>
            <Link to={`/event/${_id}`}>
                <Card>
                    <Card.Img className="imageCard" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default TinyEventCard