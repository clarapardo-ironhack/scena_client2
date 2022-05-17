import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './FanSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import Loader from "./../../../Loader/Loader"
import fansService from '../../../../services/fan.service'
import { AuthContext } from './../../..//../context/auth.context'



const FanSignupForm = ({ edit }) => {

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
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
                .then(({data}) => {
                    storeToken(data.authToken)
                    authenticateUser()
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
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>

                        <FloatingLabel controlId="username" label="Usuario" className="mb-3">
                            <Form.Control type="text" name="username" placeholder="Usuario" value={username} onChange={handleInputChange} />
                        </FloatingLabel>

                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                            {edit
                                ?
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} disabled onChange={handleInputChange} />
                                :
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                            }
                        </FloatingLabel>
                    </Col>

                </Form.Group>

                <FloatingLabel controlId="email" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                {loadingAvatar
                    ?
                    <Button variant="dark" type="submit" disabled><Loader /></Button>
                    :
                    <>
                        {edit && <Button variant="dark" type="submit">Guardar cambios</Button>}
                        {!edit && <Button variant="dark" type="submit">Registrarme</Button>}

                    </>
                }
            </Form>
        </Container>
    )
}

export default FanSignupForm