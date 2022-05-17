import { Card, Image, Row, Col } from 'react-bootstrap'
import NewMessageForm from '../../Forms/NewMessageForm/NewMessageForm'
import { AuthContext } from "../../../context/auth.context"
import { useContext, useState } from "react"


const CommonCard = ({ _id, image, username, networks, avatar, images, description, title }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    let instagramURL
    let twitterURL

    if (networks) {
        instagramURL = `https://www.instagram.com/${networks.instagram}`
        twitterURL = `https://www.twitter.com/${networks.twitter}`
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
                            return (
                                <img key={key} className="otherImages" src={value} alt="Other Profile photos" />
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                {isLoggedIn && <NewMessageForm destinationId={_id} username={username} />}
            </Row>
        </>
    )
}
export default CommonCard