import { AuthContext } from './../../context/auth.context'
import { useContext, useEffect, useState } from 'react'
import artistsService from '../../services/artist.service'
import venuesService from '../../services/venue.service'
import EventModerationCard from '../Card/EventModerationCard/EventModerationCard'


const PetitionSection = () => {

    console.log('HE ENTRADO EN PETITION')

    const { user } = useContext(AuthContext)
    const [toBeApproved, setToBeApproved] = useState([])
    const [isTrue, setIsTrue] = useState()

    useEffect(() => {
        if (user.role === 'Artist') {
            artistInfoCall()
        } else if (user.role === 'Venue') {
            venueInfoCall()
        }
    }, [isTrue])

    const artistInfoCall = () => {
        artistsService
            .getOneArtist(user._id)
            .then(({ data }) => {

                data.myEvents.map(element => {

                    if (element.isAproved.mainArtistCheck === false && element.mainArtist === user._id) {
                        setToBeApproved([...toBeApproved, element])
                    } else {
                        setToBeApproved([])
                    }
                })
                return data
            })
            .then((data) => console.log(data.myEvents))
            .catch(err => console.log(err))
    }

    const venueInfoCall = () => {
        venuesService
            .getOneVenue(user._id)
            .then(({ data }) => {

                data.myEvents.map(element => {

                    if (element.isAproved.venueCheck === false && element.venue === user._id) {
                        setToBeApproved([...toBeApproved, element])
                    } else {
                        setToBeApproved([])
                    }
                })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1>MIS MENSAJES</h1>

            {toBeApproved.map(element => {
                return <EventModerationCard event={element} role={user.role} setState={setIsTrue} state={isTrue} />
            })}
        </>
    )
}


export default PetitionSection