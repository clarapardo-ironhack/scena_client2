import { useContext, useEffect, useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import { MessageContext } from "../../context/message.context"
import messagesService from "../../services/messages.service"
import NewMessageForm from "../Forms/NewMessageForm/NewMessageForm"



const MessageCard = ({ message, messageInfoCall, setIsLoading, isLoading }) => {

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
        messageInfoCall()
    }), [isLoading])

    useEffect((() => {
        checkIfAnswered()
    }), [answered])

    const deleteMessage = () => {
        setIsLoading(true)

        messagesService
            .deleteMessage(message._id)
            .then(() => setIsLoading(false))
            .then(() => messageInfoCall())
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
            <Card>
                <Card.Body>
                    {message.originArtist && <Card.Title>Mensaje de {message.originArtist.username}</Card.Title>}
                    {message.originVenue && <Card.Title>Mensaje de {message.originVenue.username}</Card.Title>}
                    {message.originLabel && <Card.Title>Mensaje de {message.originLabel.username}</Card.Title>}
                    <p>{message.textContent}</p>
                    {answered
                        ?
                        <b>'Mensaje contestado'</b>
                        :
                        <b>'Mensaje sin contestar'</b>}
                </Card.Body>
            </Card>

            <Button onClick={openModal}>Mandar mensaje a {usernameMess}</Button>
            {isLoading
                ?
                <Button onClick={deleteMessage} disabled={true}>Eliminar mensaje</Button>
                :
                <Button onClick={deleteMessage}>Eliminar mensaje</Button>
            }
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