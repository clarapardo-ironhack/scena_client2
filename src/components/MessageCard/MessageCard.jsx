import { useContext, useEffect, useState } from "react"
import { Button, Card, Modal, Row } from "react-bootstrap"
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
        showMessage('Mensaje enviado', 'esperamos que tu mensaje no haya sido muy turras :)')
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
                    {message.originArtist && <h4> <b>{message.originArtist.username}</b> te envió un mensaje:</h4>}
                    {message.originVenue && <h4> <b>{message.originVenue.username}</b> te envió un mensaje:</h4>}
                    {message.originLabel && <h4> <b>{message.originLabel.username}</b> te envió un mensaje:</h4>}
                    <p className="messageContent">{message.textContent}</p>
                    {answered
                        ?
                        <b className="stateMess">-Mensaje contestado-</b>
                        :
                        <b className="stateMess" >-Mensaje sin contestar-</b>}
                </Card.Body>

                {/* <Button onClick={openModal}>Mandar mensaje a {usernameMess}</Button> */}

                <Row className="btnRow">
                    <div className="answerButton" onClick={openModal}>📫</div>
                    <div onClick={deleteMessage} disabled={isLoading} className='deleteMessage'>🗑️</div>
                </Row>
            </div>



            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitleMessage">Mensaje para {usernameMess}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMessageForm fireFinalActions={fireFinalActions} destinationId={destinationMess} username={usernameMess} answer={message} setAnswered={setAnswered} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default MessageCard