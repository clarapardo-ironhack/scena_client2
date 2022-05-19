import './EventDetailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BigCard from '../../../components/Card/BigCard/BigCard'
import Loader from '../../../components/Loader/Loader'
import { Button, Container, Card } from 'react-bootstrap'
import eventsService from '../../../services/events.service'
import authService from '../../../services/auth.service'
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react'
import GeneralList from '../../../components/GeneralList/GeneralList'
import { Link } from 'react-router-dom'
import ScenaNav from './../../../components/Navbar/ScenaNav'


const EventDetailsPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [event, setEvent] = useState([])
    const [attendingArtists, setAttendingArtists] = useState([])
    const [artistLoaded, setArtistLoaded] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPresent, setIsPresent] = useState(false)

    const { eventId } = useParams()

    useEffect(() => {
        checkEventAdded()
        loadEvent()
    }, [isPresent])


    const loadEvent = () => {

        eventsService
            .getOneEvent(eventId)
            .then(({ data }) => {
                setEvent(data)
                setIsLoaded(true)
                let arrArtists = []
                data.supportingArtists.map((elem, index) => {
                    arrArtists.push(elem)
                })
                arrArtists.unshift(data.mainArtist)
                setAttendingArtists(arrArtists)
                setArtistLoaded(true)
            })
            .catch(err => console.log(err))
    }

    if (user !== null) {
        var loggedUserId = user._id
        var role = user.role
    }

    function addEvent() {
        authService
            .addEvent({ role, eventId, loggedUserId })

        setIsPresent(true)
    }

    function deleteEvent() {
        authService
            .deleteEvent({ role, eventId, loggedUserId })

        setIsPresent(false)
    }

    function checkEventAdded() {
        authService.checkEvent({ role, eventId, loggedUserId }).then(({ data }) => {
            setIsPresent(data)
        })
    }



    return (<>
        <ScenaNav />
        <Container>
            <Card className="bg-white text-black">
                {!event
                    ?
                    <Loader />
                    :
                    <>
                        {isLoaded && <BigCard {...event} />}
                        {isLoggedIn
                            ?
                            !isPresent
                                ?
                                <div className="likeButton" onClick={addEvent}>❤️</div>
                                :
                                <div className="likeButton" onClick={deleteEvent}>👎</div>
                            :
                            <p>Logueate para guardarlo en favoritos</p>
                        }
                        {artistLoaded && <GeneralList infoType={attendingArtists} />}
                    </>
                }
                {isLoggedIn && (user._id === event.creator?._id)
                    ?
                    <Link to={`/event/${event._id}/edit`}><Button>Editar</Button></Link>
                    :
                    null
                }
            </Card>
        </Container>
    </>)
}

export default EventDetailsPage
