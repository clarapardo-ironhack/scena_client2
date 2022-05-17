import eventsService from '../../../services/events.service'
import { AuthContext } from './../../../context/auth.context'
import { useContext, useEffect, useState } from 'react'
import artistsService from './../../../services/artist.service'
import EventModerationCard from '../../../components/Card/EventModerationCard/EventModerationCard'
EventModerationCard



const MessagesPage = () => {

    const { user } = useContext(AuthContext)
    const [toBeApproved, setToBeApproved] = useState([])

    useEffect(() => {
        if (user.role === 'Artist') {
            artistInfoCall()
        }

    }, [])

    const artistInfoCall = () => {
        artistsService
            .getOneArtist(user._id)
            .then(({ data }) => {

                data.myEvents.map(element => {

                    if (element.isAproved.mainArtistCheck === false && element.mainArtist === user._id) {
                        console.log('-----------HOLIIII :) :) :) --------', element)
                        setToBeApproved([...toBeApproved, element])
                        console.log('el estado es ------------>', toBeApproved)
                    }
                })

            })
            .catch(err => console.log(err))
    }

    console.log('999999999999', toBeApproved)



    return (
        <>
            <h1>MIS MENSAJES</h1>

            {toBeApproved.map(element => {
                return <EventModerationCard event={element}/>
            })}

            <h2>--------</h2>
        </>
    )
}

export default MessagesPage