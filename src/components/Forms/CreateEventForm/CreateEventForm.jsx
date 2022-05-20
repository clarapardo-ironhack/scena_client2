import './CreateEventForm.css'
import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { AuthContext } from './../../../context/auth.context'
import { useContext } from 'react'
import authService from "./../../../services/auth.service"
import uploadService from "./../../../services/upload.service"
import artistsService from './../../../services/artist.service'
import venuesService from '../../../services/venue.service'
import eventsService from '../../../services/events.service'
import Loader from './../../Loader/Loader'
import SearchBar from '../../SearchBar/SearchBar'
import filterMachine from '../../../utils/filterMachine'



const CreateEventForm = ({ edit, fireFinalActions }) => {

    const { user } = useContext(AuthContext)

    const [loadingPoster, setLoadingPoster] = useState(false)
    const [allArtist, setAllArtist] = useState([])
    const [allArtistBackUp, setAllArtistBackUp] = useState([])
    const [allVenues, setAllVenues] = useState([])

    const [newEventData, setNewEventData] = useState({
        title: '',
        date: '',
        image: '',
        mainArtist: {},
        supportingArtists: [],
        venue: {},
        aprovedArtist: false,
        aprovedVenue: false,
        description: '',
        creator: user
    })

    useEffect(() => {
        artistsCall()
        venuesCall()
    }, [])

    const [maininputText, setmainInputText] = useState("")
    const [suppinputText, setsuppInputText] = useState("")
    const [venueinputText, setvenueInputText] = useState("")

    const filteredMain = filterMachine(allArtist, maininputText)
    const filteredSupporting = filterMachine(allArtistBackUp, suppinputText)
    const filteredVenues = filterMachine(allVenues, venueinputText)


    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setmainInputText(lowerCase);
    }

    let suppInputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setsuppInputText(lowerCase);
    }

    let venuesInputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setvenueInputText(lowerCase);
    }



    const artistsCall = () => {
        artistsService
            .getAllArtists()
            .then(({ data }) => {
                setAllArtist(data)
            })
            .catch(err => console.log(err))
    }

    const venuesCall = () => {
        venuesService
            .getAllVenues()
            .then(({ data }) => {
                setAllVenues(data)
            })
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        eventsService
            .createEvent(newEventData)
            .then(res => {
                fireFinalActions()
                navigate('/favorites')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget


        if (name === 'supportingArtists') {
            setNewEventData({ ...newEventData, [name]: [...newEventData.supportingArtists, value] })
        } else {
            artistsCall()
            let artistArr = allArtist.filter(e => {
                return e._id !== value
            })
            setAllArtistBackUp(artistArr)
            setNewEventData({ ...newEventData, [name]: value })

        }
    }

    const handleImageUpload = (e) => {

        setLoadingPoster(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingPoster(false)
                setNewEventData({ ...newEventData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { title, date, image, mainArtist, supportingArtists, venue, aprovedArtist, aprovedVenue, creator, description } = newEventData

    return (
        <Container>
            <h1 className="create-event-title">Añade un evento</h1>
            <hr />

            <Form onSubmit={handleSubmit}>


                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>

                        <FloatingLabel controlId="title" label="Nombre del evento" className="mb-3">
                            <Form.Control type="text" placeholder="Nombre del evento" name="title" value={title} onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="date" label="Fecha y hora" className="mb-3">
                            <Form.Control type="datetime-local" placeholder="Fecha y hora" name="date" value={date} onChange={handleInputChange} />
                        </FloatingLabel>

                    </Col>


                    <Col sm={{ span: 6 }}>
                        <div className="event-cartel" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}></div>
                        <Form.Group className="mb-3" controlId="iamge">
                            <Form.Control type="file" onChange={handleImageUpload} />
                        </Form.Group>
                    </Col>

                    <FloatingLabel controlId="description" label="Descripción del evento" className="mb-3">
                        <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                    </FloatingLabel>

                    <div className='centerAll'>
                        <SearchBar handler={inputHandler} task={'artista principal'} />

                        <FloatingLabel controlId="mainArtist" label={filteredMain.length ? "Main artist" : ''}>
                            {filteredMain.length
                                ?
                                <Form.Select className="aire" aria-label="mainArtist" onClick={handleInputChange} onChange={handleInputChange} value={mainArtist} name="mainArtist">
                                    {filteredMain.map((elm) => <option value={elm._id} key={elm._id}> {elm.username}</option>)}
                                </Form.Select>
                                :
                                <h2>No hay resultados</h2>}
                        </FloatingLabel>
                    </div>

                    <div className='centerAll'>
                        <SearchBar className="miniSearchBar" handler={suppInputHandler} task={'otros artistas'} />
                        <FloatingLabel className="aire" controlId="supportingArtists" label={filteredSupporting.length ? "Supporting artists" : ''}>
                            {filteredSupporting.length
                                ?
                                <Form.Select multiple={true} aria-label="supportingArtists" onChange={handleInputChange} value={supportingArtists} name="supportingArtists">
                                    {filteredSupporting.map((elm) => <option value={elm._id} key={elm._id}> {elm.username}</option>)}
                                </Form.Select>
                                :
                                null
                            }
                        </FloatingLabel>
                    </div>

                    <div className='centerAll'>
                        <SearchBar handler={venuesInputHandler} task={'salas de concierto'} />
                        <FloatingLabel controlId="venue" label={filteredVenues.length ? "Lugar del evento" : ''}>
                            {filteredVenues.length
                                ?
                                <Form.Select className="aire" aria-label="venue" onChange={handleInputChange} value={venue} name="venue">
                                    {filteredVenues.map((elm) => <option value={elm._id} key={elm._id}> {elm.username}</option>)}
                                    <option></option>
                                </Form.Select>
                                :
                                <h2>No hay resultados</h2>}
                        </FloatingLabel>
                    </div>

                </Form.Group>

                {loadingPoster
                    ?
                    <Loader />
                    :
                    <button className="createEvent-button aire">
                        <p>Crear</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="4" className="h-6 w-6" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" ></path>
                        </svg>
                    </button>}
            </Form>
        </Container >
    )
}

export default CreateEventForm
