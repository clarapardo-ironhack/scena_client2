import './TinyArtistCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyArtistCard = ({ _id, avatar, username, adress }) => {
    return (
        <>
            <Link to={`/artists/details/${_id}`}>
                <Card className="CoasterCard">
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title>{username}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default TinyArtistCard