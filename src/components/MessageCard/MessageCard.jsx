import { useContext, useEffect, useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import { MessageContext } from "../../context/message.context"
import messagesService from "../../services/messages.service"
import NewMessageForm from "../Forms/NewMessageForm/NewMessageForm"
import './MessageCard.css'



const MessageCard = ({ message, messageInfoCall, isLoading, setIsLoading }) => {

    let destinationMess
    let usernameMess

    const [answered, setAnswered] = useState()
    const { showMessage } = useContext(MessageContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        setAnswered(true)
        // messageInfoCall()
        showMessage('HOLA', 'mensaje enviado!')
    }

    useEffect((() => {
        checkIfAnswered()
    }), [])

    const deleteMessage = () => {
        setIsLoading(true)

        messagesService
            .deleteMessage(message._id)
            .then(() => {
                setIsLoading(false)
                messageInfoCall()
            })
            .catch(err => console.log(err))
    }

    const checkIfAnswered = () => {
        if (!message.answered) {
            setAnswered(false)
        } else if (message.answered) {
            setAnswered(true)
        }
    }


    if (message.originArtist) {
        destinationMess = message.originArtist._id
        usernameMess = message.originArtist.username
    } else if (message.originVenue) {
        destinationMess = message.originVenue._id
        usernameMess = message.originVenue.username
    } else if (message.originLabel) {
        destinationMess = message.originLabel._id
        usernameMess = message.originLabel.username
    }

    return (
        <>
            <div className="messageCard">
                <Card.Body>
                    {message.originArtist && <h3>Mensaje de <b>{message.originArtist.username}</b></h3>}
                    {message.originVenue && <h3>Mensaje de <b>{message.originVenue.username}</b></h3>}
                    {message.originLabel && <h3>Mensaje de <b>{message.originLabel.username}</b></h3>}
                    <p>{message.textContent}</p>
                    {answered
                        ?
                        <b>'Mensaje contestado'</b>
                        :
                        <b>'Mensaje sin contestar'</b>}
                </Card.Body>

                <Button onClick={openModal}>Mandar mensaje a {usernameMess}</Button>

                <Button onClick={deleteMessage} disabled={isLoading}>Eliminar mensaje</Button>
            </div>



            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje para {usernameMess}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMessageForm fireFinalActions={fireFinalActions} destinationId={destinationMess} username={usernameMess} answer={message} setAnswered={setAnswered} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default MessageCard