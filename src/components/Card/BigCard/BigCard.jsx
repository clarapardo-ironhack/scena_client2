import './BigCard.css'
import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import ArtistSpecifics from '../ArtistSpecifics/ArtistSpecifics'
import GeneralInfoCard from '../GeneralInfoCard/GeneralInfoCard'
import VenueSpecifics from '../VenueSpecifics/VenueSpecifics'
import EventSpecifics from '../EventSpecifics/EventSpecifics'


const BigCard = ({ _id, image, images, avatar, styles, username, networks,
    label, description, likedVenues, likedEvents, likedArtists, role, address,
    capacity, title, mainArtist, supportingArtists }) => {

    const packGeneral = { _id, image, images, avatar, username, networks, description, role, title, likedVenues, likedEvents, likedArtists,styles,label }
    const packArtist = { styles, label }
    const packVenue = { address, capacity }
    return (

        <>
            <GeneralInfoCard {...packGeneral} />
            {role === 'Venue' && <VenueSpecifics {...packVenue} />}
        </>
    )
}

export default BigCard