import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../../context/auth.context"
import messagesService from "../../../services/messages.service"

const NewMessageForm = ({ destinationId, username }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const { _id } = user

    const [signupData, setSignupData] = useState({
        originArtist: `${_id}`,
        originVenue: `${_id}`,
        originLabel: `${_id}`,
        destination: `${destinationId}`,
        textContent: ''
    })

    const { origin, destination, textContent } = signupData

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    console.log(signupData)

    const handleSubmit = e => {
        e.preventDefault()

        messagesService
            .createNewMessage(signupData)
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Enviar mensaje a {username}</Form.Label>

                <Form.Control
                    as="textarea"
                    style={{ height: '200px' }}
                    placeholder="Escribe aquí tu mensaje..."
                    name="textContent"
                    onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    No pongas mierdas                    </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default NewMessageForm