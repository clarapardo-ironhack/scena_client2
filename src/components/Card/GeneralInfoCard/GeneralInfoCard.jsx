<<<<<<< HEAD
import { Card, Image, Row, Col } from 'react-bootstrap'
import TinyEventCard from '../../EventCard/TinyEventCard/TinyEventCard'


const CommonCard = ({ image, username, networks, avatar, images, description, title, likedArtists, likedEvents, likedVenues }) => {
=======
import { Card, Image, Row, Col, Modal, Button } from 'react-bootstrap'
import NewMessageForm from '../../Forms/NewMessageForm/NewMessageForm'
import { AuthContext } from "../../../context/auth.context"
import { useContext, useState } from "react"


const CommonCard = ({ _id, image, username, networks, avatar, images, description, title }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
    }

    let instagramURL
    let twitterURL

    if (networks) {
        instagramURL = `https://www.instagram.com/${networks.instagram}`
        twitterURL = `https://www.twitter.com/${networks.twitter}`
    }

>>>>>>> fde5ccae6d3600765d0e7de6b08dddd0ff4ee427


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
                            return (
                                <img key={key} className="otherImages" src={value} alt="Other Profile photos" />
                            )
                        })
                    }
                </Col>
            </Row>
<<<<<<< HEAD
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
=======

            {isLoggedIn && (user.role !== 'Fan') && <Button onClick={openModal}>Mandar mensaje a {username}</Button>}

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje para {username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMessageForm fireFinalActions={fireFinalActions} destinationId={_id} username={username} answer={false} />
                </Modal.Body>
            </Modal>
>>>>>>> fde5ccae6d3600765d0e7de6b08dddd0ff4ee427
        </>
    )
}
export default CommonCard