import './BigCard.css'
import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import FanSpecifics from '../FanSpecifics/FanSpecifics'
import ArtistSpecifics from '../ArtistSpecifics/ArtistSpecifics'
import GeneralInfoCard from '../GeneralInfoCard/GeneralInfoCard'
import VenueSpecifics from '../VenueSpecifics/VenueSpecifics'
import EventSpecifics from '../EventSpecifics/EventSpecifics'


const BigCard = ({ image, images, avatar, styles, username, networks,
    label, description, likedVenues, likedEvents, likedArtists, role, address,
    capacity, title, mainArtist, supportingArtists }) => {

    const packGeneral = { image, images, avatar, username, networks, description, role, title, likedVenues, likedEvents, likedArtists }
    const packArtist = { styles, label }
    const packVenue = { address, capacity }
    const packEvent = { mainArtist, supportingArtists }
    return (

        <Container>
            <Card className="bg-white text-black">
                <GeneralInfoCard {...packGeneral} />
                {role === 'Artist' && <ArtistSpecifics {...packArtist} />}
                {role === 'Venue' && <VenueSpecifics {...packVenue} />}
                {title && <EventSpecifics {...packEvent} />}
            </Card>
        </Container >
    )
}

export default BigCard