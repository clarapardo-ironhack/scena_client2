import { Button, Card } from "react-bootstrap"
import NewMessageForm from "../Forms/NewMessageForm/NewMessageForm"



const MessageCard = ({ message }) => {

    let destinationMess
    let usernameMess

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
                </Card.Body>
            </Card>
            <NewMessageForm destinationId={destinationMess} username={usernameMess} />

        </>
    )
}

export default MessageCard