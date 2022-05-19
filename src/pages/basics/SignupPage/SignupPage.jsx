import './SignupPage.css'
import LabelSignupForm from '../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from '../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ScenaNav from './../../../components/Navbar/ScenaNav'




const SignupPage = ({ fireFinalActions }) => {

    const [showButtons, setShowButtons] = useState(true)
    const [showForm, setShowForm] = useState('')

    const openSignupForm = role => {
        setShowForm(role)
        setShowButtons(false)
    }

    return (
        <>
            <div className="registerPage">

                {showButtons
                    ?
                    <Row>
                        <Col sm={{ span: 4, offset: 2 }}>
                            <div className="one-option-user li-option1" onClick={() => openSignupForm('fan')}>
                                fan
                            </div>
                        </Col>
                        <Col sm={{ span: 4 }}>
                            <div className="one-option-user li-option2" onClick={() => openSignupForm('venue')}>
                                venue
                            </div>
                        </Col>
                        <Col sm={{ span: 4, offset: 2 }}>
                            <div className="one-option-user li-option3" onClick={() => openSignupForm('artist')}>
                                artist
                            </div>
                        </Col>
                        <Col sm={{ span: 4 }}>
                            <div className="one-option-user li-option4" onClick={() => openSignupForm('label')}>
                                label
                            </div>
                        </Col>
                    </Row>
                    :
                    <>
                        {showForm === 'fan' && <FanSignupForm fireFinalActions={fireFinalActions} />}
                        {showForm === 'artist' && <ArtistSignupForm fireFinalActions={fireFinalActions} />}
                        {showForm === 'venue' && <VenueSignupForm fireFinalActions={fireFinalActions} />}
                        {showForm === 'label' && <LabelSignupForm fireFinalActions={fireFinalActions} />}
                    </>
                }

            </div>
        </>)
}

export default SignupPage