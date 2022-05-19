import LoginForm from '../../../components/Forms/LoginForm/LoginForm'
import './LoginPage.css'
import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react'


const LoginPage = ({fireFinalActions}) => {

    const [showButtons, setShowButtons] = useState(true)
    const [showForm, setShowForm] = useState('')

    const openLoginForm = role => {
        setShowForm(role)
        setShowButtons(false)
    }

    return (
        <div className="loginPage">
           
            {showButtons
                ?
                <Row > 
                    <Col sm={{ span: 4, offset: 2 }}>
                        <div className="one-option-user li-option1" onClick={() => openLoginForm('fan')}>
                            fan
                        </div>
                    </Col>
                    <Col sm={{ span: 4 }}>
                        <div className="one-option-user li-option2" onClick={() => openLoginForm('venue')}>
                            local
                        </div>
                    </Col>
                    <Col sm={{ span: 4, offset: 2 }}>
                        <div className="one-option-user li-option3" onClick={() => openLoginForm('artist')}>
                            artista
                        </div>
                    </Col>
                    <Col sm={{ span: 4}}>
                        <div className="one-option-user li-option4" onClick={() => openLoginForm('label')}>
                            sello
                        </div>
                    </Col>
                </Row>
                :
                <>
                    {showForm === 'fan' && <LoginForm role={showForm} fireFinalActions={fireFinalActions} />}
                    {showForm === 'venue' && <LoginForm role={showForm} fireFinalActions={fireFinalActions} />}
                    {showForm === 'artist' && <LoginForm role={showForm} fireFinalActions={fireFinalActions} />}
                    {showForm === 'label' && <LoginForm role={showForm} fireFinalActions={fireFinalActions} />}
                </>

            }

        </div>
    )
}

export default LoginPage