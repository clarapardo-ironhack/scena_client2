import { useContext, useEffect, useState } from "react"
import { Form, Button, FloatingLabel, Container, Row, Col, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'
import './ArtistSignupForm.css'
import stylesList from "../../../../utils/stylesList"
import Loader from '../../../Loader/Loader'
import artistsService from '../../../../services/artist.service'
import { AuthContext } from './../../..//../context/auth.context'
import SearchBar from "../../../SearchBar/SearchBar"
import filterMachine from "../../../../utils/filterMachine"


 
const ArtistSignupForm = ({ edit }) => {

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [loadingImages, setLoadingImages] = useState(false)

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        description: '',
        networks: {
            instagram: '',
            spotify: '',
            soundcloud: '',
            bandcamp: '',
            twitter: ''
        },
        styles: [],
        avatar: '',
        images: []
    })

    useEffect(() => {
        editInfoCall()
    }, [])

    const [inputText, setInputText] = useState("")
    const filteredGenres = filterMachine(stylesList, inputText)

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const editInfoCall = () => {
        if (edit) {
            artistsService
                .getOneArtist(edit)
                .then(({ data }) => {
                    setSignupData(data)
                })
                .catch(err => console.log(err))
        }
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        edit
            ?
            artistsService
                .editArtist(signupData)
                .then(() => navigate('/'))
                .catch(err => console.log(err))
            :
            authService
                .artistRegister(signupData)
                .then(({ data }) => {
                    storeToken(data.authToken)
                    authenticateUser()
                    navigate('/')
                })
                .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        if (name === 'instagram' || name === 'twitter' || name === 'spotify' || name === 'soundcloud' || name === 'bandcamp') {
            setSignupData({
                ...signupData,
                networks: {
                    ...signupData.networks,
                    [name]: value
                }
            })
        } else if (name === 'styles') {
            if (signupData.styles.includes(value)) {
                const styleOut = signupData.styles.filter(e => {
                    return e !== value
                })
                setSignupData({ ...signupData, styles: styleOut })
            } else {
                setSignupData({ ...signupData, [name]: [...signupData.styles, value] })
            }
        } else {
            setSignupData({ ...signupData, [name]: value })
        }
    }

    const handleAvatarUpload = (e) => {

        setLoadingAvatar(true)

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

    const handleImagesUpload = (e) => {

        setLoadingImages(true)

        const uploadData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            uploadData.append('imageData', e.target.files[i])
        }


        uploadService
            .uploadImages(uploadData)
            .then(({ data }) => {
                setLoadingImages(false)
                setSignupData({ ...signupData, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))
    }

    const { username,
        password,
        email,
        phoneNumber,
        description,
        networks: { instagram, spotify, soundcloud, bandcamp, twitter },
        styles,
        avatar,
        images
    } = signupData

    return (
        <Container>
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-username" label="Usuario" className="mb-3">
                            <Form.Control type="text" onChange={handleInputChange} name="username" value={username} placeholder="Username" />
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-password" label="Contraseña" className="mb-3">
                            {edit
                                ?
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} disabled onChange={handleInputChange} />
                                :
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                            }                        </FloatingLabel>
                    </Col>
                </Form.Group>

                <FloatingLabel controlId="floating-email" label="Email" className="mb-3">
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder="email" />
                </FloatingLabel>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                        </FloatingLabel>


                        <h4>STYLES</h4>

                        <SearchBar handler={inputHandler} task={'estilos'} />

                        <FloatingLabel controlId="floating-style1" className="mb-3">

                            {inputText.length
                                ?
                                <Form.Select multiple={true} style={{ height: '200px' }} aria-label="styles" onChange={handleInputChange} value={styles} name="styles">
                                    {filteredGenres.map(style => <option key={`1 ${style}`} >{style}</option>)}
                                </Form.Select>
                                :
                                <></>}
                        </FloatingLabel>


                    </Col>

                    <Col sm={{ span: 6 }}>

                        <Form.Group className="mb-3" controlId="phoneNumber" >
                            <FloatingLabel controlId="floating-phoneNumber" label="Teléfono">
                                <Form.Control type="text" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" />
                            </FloatingLabel>
                        </Form.Group>

                        <h4>SOCIALS</h4>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="instagram"></InputGroup.Text>
                            <FloatingLabel controlId="instagram" label="Instagram">
                                <Form.Control type="text" placeholder="Instagram" name="instagram" value={instagram} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="spotify"></InputGroup.Text>
                            <FloatingLabel controlId="spotify" label="Spotify">
                                <Form.Control type="text" placeholder="Spotify" style={{ width: '204px' }} name="spotify" value={spotify} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="soundcloud"></InputGroup.Text>
                            <FloatingLabel controlId="soundcloud" label="Soundcloud">
                                <Form.Control type="text" placeholder="Soundcloud" style={{ width: '204px' }} name="soundcloud" value={soundcloud} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="twitter"></InputGroup.Text>
                            <FloatingLabel controlId="twitter" label="Twitter">
                                <Form.Control type="text" placeholder="Twitter" style={{ width: '204px' }} name="twitter" value={twitter} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="bandcamp"></InputGroup.Text>
                            <FloatingLabel controlId="bandcamp" label="Bandcamp">
                                <Form.Control type="text" placeholder="bandcamp" style={{ width: '204px' }} name="bandcamp" value={bandcamp} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>
                    </Col>

                </Form.Group>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>AVATAR</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pages">
                    <Form.Label>Imágenes</Form.Label>
                    <Form.Control type="file" onChange={handleImagesUpload} multiple />
                </Form.Group>

                <input id="role" name="role" type="hidden" value="Artist"></input>

                {loadingAvatar || loadingImages
                    ?
                    <Button variant="dark" type="submit" disabled><Loader /></Button>
                    :
                    <>
                        {edit && <Button variant="dark" type="submit">Guardar cambios</Button>}
                        {!edit && <Button variant="dark" type="submit">Registrarme</Button>}
                    </>}
            </Form>
        </Container>
    )
}

export default ArtistSignupForm