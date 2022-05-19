import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import messagesService from '../../../services/messages.service'
import { Button, Modal, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScenaNav from './../../../components/Navbar/ScenaNav'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'


const HomePage = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [receivedMessages, setReceivedMessages] = useState([])
    const [unansweredMessages, setUnansweredMessages] = useState([])
    const [showNavbar, setShowNavbar] = useState(false)

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

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    const fireFinalActionsLogin = () => {
        setShowLoginModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    const fireFinalActionsRegister = () => {
        setShowRegisterModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    useEffect((() => {
        setShowNavbar(true)
    }), [])

    // onClick = {() => setShowNavbar(true)}


    return (<div className='homePage'>
        <ScenaNav />

        <Row className='rowOne' id='row1'>
            <a href='#row2'><img src="./../../../../img/logosSinFondo.png" alt="Logo" /></a>
        </Row>
        <Row className='homeRow two' id='row2'>
            <a href='#row3' >  <h1>Comenzar</h1></a>
        </Row>

        <Row className='homeRow three' id='row3'>
            <h1>QUIÉN ERES?</h1>
            <Button className="nav-link" onClick={() => setShowLoginModal(true)}>Iniciar sesión</Button>
            <Button className="nav-link" onClick={() => setShowRegisterModal(true)}>Registro</Button>
            <a href='#row4'>cuando te regisstras....</a>
        </Row>

        <Row className='homeRow four' id='row4'>
            <h1>¿Y QUÉ VIENE A BUSCAR?</h1>
            <p>botones de cosas</p>
        </Row>


        <Modal className="loginModal" show={showLoginModal} onHide={() => setShowLoginModal(false)}>
            <Modal.Header closeButton className="modal-header-li-si"></Modal.Header>
            <LoginPage fireFinalActions={fireFinalActionsLogin} />
        </Modal>

        <Modal className="registerModal" show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
            <Modal.Header closeButton></Modal.Header>
            <SignupPage fireFinalActions={fireFinalActionsRegister} />
        </Modal>
    </div >
    )
}

export default HomePage