import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import messagesService from '../../../services/messages.service'
import { Button, Modal, Container, Row, Col } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ScenaNav from './../../../components/Navbar/ScenaNav'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'


const HomePage = () => {

    const navigate = useNavigate()

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
    const [showForms, setShowForms] = useState(false)
    const [textChange, setTextChange] = useState(false)

    const fireFinalActionsLogin = () => {
        setShowLoginModal(false)
        setShowNavbar(true)
        showMessage('HOLA', 'mensaje enviado!')
        useNavigate
    }

    const fireFinalActionsRegister = () => {
        setShowRegisterModal(false)
        setShowNavbar(true)
        showMessage('HOLA', 'mensaje enviado!')
    }

    useEffect((() => {
        setShowNavbar(false)
    }), [])

    const showTheForms = () => {

        setInterval(() => {
            setTextChange(true)
        }, 100);
        setInterval(() => {
            setShowForms(true)
        }, 1000);
    }

    // onClick = {() => setShowNavbar(true)}


    return (<div className='homePage'>
        {(showNavbar || isLoggedIn) && <ScenaNav />}

        <Row className='rowOne' id='hello'>
            <a href='#whoareyou?'>
            </a>
        </Row>

        <Row className='homeRow three' id='whoareyou?'>
            {!user
                ?
                <div  >

                    <Row className='mainTitle'>
                        <Col className='quienEres' onMouseOver={() => { showTheForms() }} >
                            {textChange
                                ?
                                <h1>¿QUIÉN ERES?</h1>
                                :
                                <h1>VEN AQUÍ</h1>
                            }
                        </Col>
                    </Row>
                    {showForms
                        &&
                        <Row className='notLoggedBtns'>

                            <Button className="loginBtn" onClick={() => setShowLoginModal(true)}>INICIAR SESIÓN</Button>
                            <Button className="signupBtn" onClick={() => setShowRegisterModal(true)}>REGISTRO</Button>

                        </Row>}
                </div>
                :
                <>
                    <h1>¿Y QUÉ VIENE A BUSCAR?</h1>
                    <Row >
                        <Col sm={{ span: 4, offset: 2 }}>
                            <div className="homeSelections" >
                                fan
                            </div>
                        </Col>
                        <Col sm={{ span: 4 }}>
                            <div className="homeSelections" >
                                local
                            </div>
                        </Col>
                        <Col sm={{ span: 4, offset: 2 }}>
                            <div className="homeSelections" >
                                artista
                            </div>
                        </Col>
                        <Col sm={{ span: 4 }}>
                            <div className="homeSelections" >
                                sello
                            </div>
                        </Col>
                    </Row>
                </>}
        </Row>



        <Modal className="loginModal" show={showLoginModal} onHide={() => setShowLoginModal(false)}>
            <LoginPage fireFinalActions={fireFinalActionsLogin} />
        </Modal>

        <Modal className="registerModal" show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
            <SignupPage className='prueba' fireFinalActions={fireFinalActionsRegister} />
        </Modal>
    </div >
    )
}

export default HomePage