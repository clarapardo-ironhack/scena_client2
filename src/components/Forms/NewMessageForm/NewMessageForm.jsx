import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../../context/auth.context"
import messagesService from "../../../services/messages.service"
import './NewMessageForm.css'

const NewMessageForm = ({ destinationId, username, answer, fireFinalActions, setAnswered }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const { _id } = user

    const [signupData, setSignupData] = useState({
        originArtist: `${_id}`,
        originVenue: `${_id}`,
        originLabel: `${_id}`,
        destination: `${destinationId}`,
        textContent: '',
        answered: false
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
                if (answer) {
                    setAnswered(true)
                }
                fireFinalActions()
            })
            .catch(err => console.log(err))

        console.log('e------------------------', answer)

        if (answer) {
            messagesService
                .answerMessage(answer._id)
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className="messFormText"
                    as="textarea"
                    style={{ height: '200px' }}
                    placeholder="Escribe aquí tu mensaje..."
                    name="textContent"
                    onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    No pongas mierdas                    </Form.Text>
                <button className="sendAnswer"  type="submit">
                    <div className="answerButton" >📫</div>
                </button>
            </Form>
        </>
    )
}

export default NewMessageForm