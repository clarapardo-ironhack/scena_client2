import './BigArtistCard.css'
import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BigArtistCard = ({ images, username, networks, label, description }) => {

    return (
        <Container>
            <Card className="bg-white text-black">
                <Row>
                    <Col md={3}>
                        <Image className="profileImg" src={images.avatar} alt="Profile Picture" />
                    </Col>
                    <Col md={9}>
                        <Card.Title>{username}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>
                            <div className="networksLinks">
                                <a target="_blank" rel="noreferrer" href={networks.instagram}>Instagram </a>
                                <a target="_blank" rel="noreferrer" href={networks.spotify}>Spotify </a>
                                <a target="_blank" rel="noreferrer" href={networks.souncloud}>SoundCloud </a>
                                <a target="_blank" rel="noreferrer" href={networks.twitter}>Twitter </a>
                            </div>
                        </Card.Text>
                        <Card.Text>Label : {label?.username}</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            images.others.map(elem => {
                                console.log("imagen", elem)
                                return (
                                    <img className="otherImages" src={elem} alt="Other Profile photos"></img>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default BigArtistCard