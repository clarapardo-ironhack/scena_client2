import './BigArtistCard.css'
import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BigArtistCard = ({ images, avatar, style1, style2, style3, username, networks, label, description }) => {


    return (
        <Container>
            <Card className="bg-white text-black">
                <Row>
                    <Col md={3}>
                        <Image className="profileImg" src={avatar} alt="Profile Picture" />
                    </Col>
                    <Col md={9}>
                        <Card.Title>{username}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>
                            <div className="networksLinks">
                                {networks.instagram && <a target="_blank" rel="noreferrer" href={networks.instagram}>Instagram </a>}
                                {networks.spotify && <a target="_blank" rel="noreferrer" href={networks.spotify}>Spotify </a>}
                                {networks.soundcloud && <a target="_blank" rel="noreferrer" href={networks.soundcloud}>SoundCloud </a>}
                                {networks.twitter && <a target="_blank" rel="noreferrer" href={networks.twitter}>Twitter </a>}
                                {networks.bandcamp && <a target="_blank" rel="noreferrer" href={networks.bandcamp}> BandCamp </a>}

                            </div>
                        </Card.Text>
                        <Card.Text>Label : {label?.username}</Card.Text>
                        <Card.Text>
                            Estilos
                            {
                                style1
                                &&
                                <ul>
                                    {style1 && <li>{style1}</li>}
                                    {style2 && <li>{style2}</li>}
                                    {style3 && <li>{style3}</li>}
                                </ul>
                            }
                        </Card.Text>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            Object.entries(images).map(([key, value]) => {
                                console.log(value)
                                return (
                                    <img key={key} className="otherImages" src={value} alt="Other Profile photos" />
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