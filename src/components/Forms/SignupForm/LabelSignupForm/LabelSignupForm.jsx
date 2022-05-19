import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './LabelSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import Loader from '../../../Loader/Loader'
import labelsService from '../../../../services/label.service'
import { AuthContext } from './../../..//../context/auth.context'



const LabelSignupForm = ({ edit, fireFinalActions }) => {

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        networks: {
            instagram: '',
            twitter: '',
        },
        phoneNumber: '',
        avatar: 'https://res.cloudinary.com/dug3grdkr/image/upload/v1652975077/o8geesk1nyu9kumwh6yu.jpg',
        description: '',
        duty: 'RecordLabel'
    })

    useEffect(() => {
        editInfoCall()
    }, [])

    const editInfoCall = () => {
        if (edit) {
            labelsService
                .getOneLabel(edit)
                .then(({ data }) => setSignupData(data))
                .catch(err => console.log(err))
        }
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        edit
            ?
            labelsService
                .editLabel(signupData)
                .then(() => navigate('/'))
                .catch(err => console.log(err))
            :
            authService
                .labelRegister(signupData)
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

        if (name === 'instagram' || name === 'twitter') {
            setSignupData({
                ...signupData,
                networks: {
                    ...signupData.networks,
                    [name]: value
                }
            })
        } else {
            setSignupData({ ...signupData, [name]: value })
        }
    }

    const {
        username,
        email,
        password,
        networks: { instagram, twitter },
        phoneNumber,
        avatar,
        description,
        duty
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
            <h1 className="login-title">LABEL ¿?</h1>
            <hr />

            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="duty" className="mb-3">
                    <Form.Select defaultValue="RecordLabel" name="duty" onChange={handleInputChange}>
                        <option value={'RecordLabel'}>Sello discográfico</option>
                        <option value={'Management'} >Agencia de management</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <div className="profilePic-Signin" style={{ backgroundImage: `url('${avatar}')`, backgroundSize: 'cover' }}></div>
                        <Form.Group className="mb-3" controlId="avatar">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 00-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 000-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 016 13.5V13h-.5a.5.5 0 01-.5-.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.5-.5V10h-.5a.499.499 0 01-.175-.032l-.179.178a.5.5 0 00-.11.168l-2 5a.5.5 0 00.65.65l5-2a.5.5 0 00.168-.11l.178-.178z"></path></svg>
                                <Form.Control type="file" onChange={handleAvatarUpload} hidden />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Control type="file" onChange={handleAvatarUpload} />
                        </Form.Group>
                    </Col>

                    <Col sm={{ span: 6 }}>

                        <FloatingLabel controlId="username" label="Usuario" className="mb-3">
                            <Form.Control type="text" placeholder="Usuario" name="username" value={username} onChange={handleInputChange} />
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

                        <FloatingLabel controlId="phoneNumber" label="Móvil" className="mb-3">
                            <Form.Control type="text" placeholder="Móvil" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>
                </Form.Group>

                <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                    <Form.Control as="textarea" style={{ height: '120px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                </FloatingLabel>

                <h6 className="small-title">Tus redes sociales</h6>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>

                        <InputGroup className="mb-2">
                            <InputGroup.Text id="instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z"></path></svg>
                                <Form.Control type="text" placeholder="Instagram" name="instagram" style={{ width: '180px', marginLeft: '5px' }} value={instagram} onChange={handleInputChange} />
                            </InputGroup.Text>
                            {/* <FloatingLabel controlId="instagram" label="Instagram">
                            </FloatingLabel> */}
                        </InputGroup>
                    </Col>

                    <Col sm={{ span: 6 }}>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z"></path></svg>
                                <Form.Control type="text" placeholder="Twitter" style={{ width: '180px', marginLeft: '5px' }} name="twitter" value={twitter} onChange={handleInputChange} />
                            </InputGroup.Text>
                            {/* <FloatingLabel controlId="twitter" label="Twitter">
                            </FloatingLabel> */}
                        </InputGroup>
                    </Col>

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

export default LabelSignupForm