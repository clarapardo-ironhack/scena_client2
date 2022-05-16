import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './LabelSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import Loader from '../../../Loader/Loader'
import labelsService from '../../../../services/label.service'


const LabelSignupForm = ({ edit }) => {

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
        avatar: '',
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
                .then(() => navigate('/'))
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
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Col} controlId="duty" className="mb-3">
                    <Form.Select defaultValue="RecordLabel" name="duty" onChange={handleInputChange}>
                        <option value={'RecordLabel'}>Sello discográfico</option>
                        <option value={'Management'} >Agencia de management</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="username" label="Usuario" className="mb-3">
                            <Form.Control type="text" placeholder="Usuario" name="username" value={username} onChange={handleInputChange} />
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

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>Foto de perfil</Form.Label>
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
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="phoneNumber"></InputGroup.Text>
                            <FloatingLabel controlId="phoneNumber" label="Móvil">
                                <Form.Control type="text" placeholder="Móvil" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <h6>Añade tus redes sociales</h6>
                        <hr />

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="instagram"></InputGroup.Text>
                            <FloatingLabel controlId="instagram" label="Instagram">
                                <Form.Control type="text" placeholder="Instagram" name="instagram" value={instagram} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="twitter"></InputGroup.Text>
                            <FloatingLabel controlId="twitter" label="Twitter">
                                <Form.Control type="text" placeholder="Twitter" style={{ width: '204px' }} name="twitter" value={twitter} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>
                    </Col>

                </Form.Group>

            </Form>
        </Container>
    )
}

export default LabelSignupForm