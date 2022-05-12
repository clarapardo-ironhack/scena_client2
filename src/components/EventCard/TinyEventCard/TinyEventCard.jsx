import './TinyEventCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyEventCard = ({ _id, title, avatar }) => {


    return (
        <>
            <Link to={`/event/${_id}`}>
                <Card className="CoasterCard">
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default TinyEventCard