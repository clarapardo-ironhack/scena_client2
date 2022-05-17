import { Card, Image, Row, Col } from 'react-bootstrap'
import TinyEventCard from '../../EventCard/TinyEventCard/TinyEventCard'


const CommonCard = ({ image, username, networks, avatar, images, description, title, likedArtists, likedEvents, likedVenues }) => {


    let instagramURL = ""
    let twitterURL = ""

    if (networks) {
        instagramURL = `https://www.instagram.com/${networks.instagram}`
        twitterURL = `https://www.twitter.com/${networks.twitter}`
    }
    else {
        instagramURL = ""
        twitterURL = ""
    }
    return (
        <>
            <Row>

                {

                    avatar
                        ?
                        <Col md={3}>
                            <Image className="profileImg" src={avatar} alt="Profile Picture" />
                        </Col>
                        :
                        <Col md={3}>
                            <Image className="profileImg" src={image} alt="Profile Picture" />
                        </Col>

                }
                <Col md={9}>
                    {username && <Card.Title>{username}</Card.Title>}
                    {title && <Card.Title>{title}</Card.Title>}
                    {description && <Card.Text>{description}</Card.Text>}
                    <Card.Text>
                        {
                            networks
                            &&
                            <div className="networksLinks">
                                {networks.instagram && <a target="_blank" rel="noreferrer" href={instagramURL}>Instagram </a>}
                                {networks.spotify && <a target="_blank" rel="noreferrer" href={networks.spotify}>Spotify </a>}
                                {networks.soundcloud && <a target="_blank" rel="noreferrer" href={networks.soundcloud}>SoundCloud </a>}
                                {networks.twitter && <a target="_blank" rel="noreferrer" href={twitterURL}>Twitter </a>}
                                {networks.bandcamp && <a target="_blank" rel="noreferrer" href={networks.bandcamp}> BandCamp </a>}

                            </div>
                        }
                    </Card.Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        images
                        &&
                        Object.entries(images).map(([key, value]) => {
                            console.log(value)
                            return (
                                <img key={key} className="otherImages" src={value} alt="Other Profile photos" />
                            )
                        })
                    }
                </Col>
            </Row>
            {
                likedArtists?.length
                &&
                <Col>
                    {
                        likedArtists.map((artist, index) => {

                            return (
                                <TinyCard {...artist} />
                            )
                        })
                    }
                </Col>
            }

            {
                likedVenues?.length
                &&
                <Col>
                    {
                        likedVenues.map((venue, index) => {
                            return (
                                <TinyCard {...venue} />
                            )
                        })
                    }
                </Col>
            }

            {
                likedEvents?.length
                &&
                <Col>
                    {
                        likedEvents.map((event, index) => {
                            return (
                                <TinyEventCard {...event} />
                            )
                        })
                    }
                </Col>
            }
        </>
    )
}
export default CommonCard