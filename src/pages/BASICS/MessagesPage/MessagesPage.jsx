import eventsService from '../../../services/events.service'
import { AuthContext } from './../../../context/auth.context'
import { useContext } from 'react'
import artistsService from './../../../services/artist.service'



const MessagesPage = () => {

    const { user } = useContext(AuthContext)

    eventsService
        .getAllEvents()
        .then(allEvents => {
            // allEvents.filter(eachEvent => {
            //     if (eachEvent.mainArtist.email === user.email && eachEvent.isAproved.mainArtist === false) {

            //     }
            // })


            if (user.role === 'Artist') {
                artistsService
                    .getOneArtist(user._id)
                    .then(artistInfo => {


                    })
            }


        })
        .catch(err => console.log(err))



    return (
        <>
            <h1>Mensajes</h1>


        </>
    )
}

export default MessagesPage