import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import messagesService from '../../../services/messages.service'
import { Button, Modal, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [receivedMessages, setReceivedMessages] = useState([])
    const [unansweredMessages, setUnansweredMessages] = useState([])

    const unaFuncion = () => {
        setUnansweredMessages(receivedMessages.map((element) => {
            if (element.answered === false) {
                return element
            }
        }))

    }

    console.log('AQUIIIIII', unansweredMessages.length)

    useEffect(() => {
        if (user) {
            messageInfoCall()
        }
    }, [])

    useEffect(() => {
        if (user) {
            unaFuncion()
        }
    }, [receivedMessages])

    const messageInfoCall = () => {
        messagesService
            .getAllUserMessages(user._id)
            .then(({ data }) => setReceivedMessages(data))
    }

    //AQUI EMPIEZA LA FIESTA




    return (<div className='homePage'>
            <Row className='rowOne' id='row1'>
            <a href='#row2'><img src="./../../../../img/logosSinFondo.png" alt="Logo" /></a>
            </Row>
            <Row className='homeRow two' id='row2'>
                <h1>HOLA</h1>
                <a href='#row3'>flecha</a>
            </Row>
            <Row className='homeRow three' id='row3'>
                <h1>QUIÉN ERES?</h1>
                <a href='#row4'>cuando te regisstras....</a>
            </Row>
            <Row className='homeRow four' id='row4'>
                <h1>¿Y QUÉ VIENE A BUSCAR?</h1>
                <p>botones de cosas</p>
            </Row>
    </div >
    )
}

export default HomePage