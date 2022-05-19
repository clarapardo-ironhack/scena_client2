import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './FanSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import Loader from "./../../../Loader/Loader"
import fansService from '../../../../services/fan.service'
import { AuthContext } from './../../..//../context/auth.context'



const FanSignupForm = ({ edit, fireFinalActions }) => {

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: 'https://res.cloudinary.com/dug3grdkr/image/upload/v1652975077/o8geesk1nyu9kumwh6yu.jpg',
    })

    useEffect(() => {
        editInfoCall()
    }, [])

    const editInfoCall = () => {
        if (edit) {
            fansService
                .getOneFan(edit)
                .then(({ data }) => setSignupData(data))
                .catch(err => console.log(err))
        }
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        edit
            ?
            fansService
                .editFan(signupData)
                .then(() => navigate('/'))
                .catch(err => console.log(err))
            :
            authService
                .fanRegister(signupData)
                .then(({ data }) => {
                    storeToken(data.authToken)
                    authenticateUser()
                    fireFinalActions()
                    navigate('/')
                })
                .catch(err => console.log(err))
    }

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const {
        username,
        email,
        password,
        avatar,
        likedEvents,
        likedArtists,
        likedVenues
    } = signupData

    const handleAvatarUpload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingAvatar(false)
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1 className="login-title">FAN ¿?</h1>
            <hr />

            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <div className="profilePic-Signin" style={{ backgroundImage: `url('${avatar}')`, backgroundSize: 'cover' }}></div>
                        <Form.Group className="mb-3" controlId="avatar">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 00-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 000-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 016 13.5V13h-.5a.5.5 0 01-.5-.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.5-.5V10h-.5a.499.499 0 01-.175-.032l-.179.178a.5.5 0 00-.11.168l-2 5a.5.5 0 00.65.65l5-2a.5.5 0 00.168-.11l.178-.178z"></path></svg>
                                <Form.Control type="file" onChange={handleAvatarUpload} hidden />
                            </div>
                        </Form.Group>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="username" label="Usuario" className="mb-3">
                            <Form.Control type="text" name="username" placeholder="Usuario" value={username} onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                            {edit
                                ?
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} disabled onChange={handleInputChange} />
                                :
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                            }
                        </FloatingLabel>

                        <FloatingLabel controlId="email" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>

                </Form.Group>


                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                {loadingAvatar
                    ?
                    <Button variant="dark" type="submit" disabled><Loader /></Button>
                    :
                    <>
                        {edit && <Button variant="dark" type="submit">Guardar cambios</Button>}
                        {!edit && <button className="register-button">
                            <p>Registrarme</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>}

                    </>
                }
            </Form>
        </Container>
    )
}

export default FanSignupForm