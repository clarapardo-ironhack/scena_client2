import { Card } from "react-bootstrap"




const MessageCard = (message) => {


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
        </>
    )
}

export default MessageCard