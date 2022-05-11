import './TinyArtistCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TinyArtistCard = ({ _id, images, username }) => {
    return (
        <>
            <Link to={`artist/detalles/${_id}`}>
                <Card className="CoasterCard">
                    <Card.Img variant="top" src={images.avatar} />
                    <Card.Body>
                        <Card.Title>{username}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default TinyArtistCard