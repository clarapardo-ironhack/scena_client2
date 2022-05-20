import { Card, Image, Row, Col, Modal, Button, Container } from 'react-bootstrap'
import TinyEventCard from '../../EventCard/TinyEventCard/TinyEventCard'
import NewMessageForm from '../../Forms/NewMessageForm/NewMessageForm'
import { AuthContext } from "../../../context/auth.context"
import { useContext, useState } from "react"
import { MessageContext } from '../../../context/message.context'
import TinyCard from '../TinyCard/TinyCard'
import './GeneralInfoCard.css'
import Slider from '../../Slider/Slider'


const CommonCard = ({ _id, image, username, networks, avatar, images, description, title, likedArtists, likedEvents, likedVenues, role, styles, label }) => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        showMessage('HOLA', 'mensaje enviado!')
    }

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
            <Row className='pageUsername'>
                <Col>
                    {username && <h1>{username}</h1>}
                </Col>

            </Row>
            <Row className="firstRow">
                <Col md={{ span: 4, offset: 1 }}>
                    {

                        
                            <Col md={3}>
                              { images && <Slider images={images} />}
                          
                            {  image &&  <Image className="poster" src={image}/>}
                            </Col>

                    }
                </Col>
                <Col md={{ span: 6 }}>

                    {title && <Card.Title className="pageUsername">{title}</Card.Title>}

                    {label && <Card.Text>{label}</Card.Text>}
                    {description && <div>
                        {avatar && <Image className="profileImg" src={avatar} alt="Profile Picture" />}
                        <div className="descriptionText">{description}
                            <hr />
                            {
                                styles
                                &&
                                <span>
                                    {
                                        styles.map((element, index) => {
                                            return <span key={index}>{element}</span>
                                        })
                                    }
                                </span>
                            }
                            {
                                networks
                                &&
                                <>
                                    <span >
                                        {networks.instagram && <a target="_blank" rel="noreferrer" href={instagramURL}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z"></path></svg></a>}
                                        {networks.spotify && <a target="_blank" rel="noreferrer" href={networks.spotify}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-spotify" viewBox="0 0 16 16" > <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.669 11.538a.498.498 0 01-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 01-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 01.166.686zm.979-2.178a.624.624 0 01-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 01-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 01.206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 11-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 11-.764 1.288z"></path></svg></a>}
                                        {networks.twitter && <a target="_blank" rel="noreferrer" href={twitterURL}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z"></path></svg></a>}
                                    </span>
                                </>
                            }</div>
                    </div>}


                </Col>


                {isLoggedIn && (user.role !== 'Fan') && !title && (user._id !== _id) && <div className="messageButton" onClick={openModal}>📫</div>}

            </Row>


            <Row>
                {

                    likedArtists?.length
                    &&
                    user._id === _id
                    &&
                    <>
                        {
                            likedArtists.map((artist, index) => {

                                return (
                                    <TinyCard alterRole={role} {...artist} />
                                )
                            })
                        }
                    </>
                }

                {
                    likedVenues?.length
                    &&
                    user._id === _id
                    &&
                    <>
                        {
                            likedVenues.map((venue, index) => {
                                return (
                                    <TinyCard alterRole={role} {...venue} />
                                )
                            })
                        }
                    </>
                }

                {
                    likedEvents?.length
                    &&
                    user._id === _id
                    &&
                    <>
                        {
                            likedEvents.map((event, index) => {
                                return (
                                    <TinyEventCard {...event} />
                                )
                            })
                        }
                    </>
                }
            </Row>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje para {username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMessageForm fireFinalActions={fireFinalActions} destinationId={_id} username={username} answer={false} />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default CommonCard