import './BigCard.css'
import { Card, Container, Image, Row, Col } from 'react-bootstrap'
import FanSpecifics from '../FanSpecifics/FanSpecifics'
import ArtistSpecifics from '../ArtistSpecifics/ArtistSpecifics'
import GeneralInfoCard from '../GeneralInfoCard/GeneralInfoCard'
import VenueSpecifics from '../VenueSpecifics/VenueSpecifics'

const BigCard = ({ image, images, avatar, styles, username, networks,
    label, description, likedVenues, likeEvents, likedArtists, role, address,
    capacity, title }) => {

    const packGeneral = { image, images, avatar, username, networks, description, role, title }
    const packFan = { likedVenues, likeEvents, likedArtists }
    const packArtist = { styles, label }
    const packVenue = { address, capacity }

    return (

        <Container>
            <Card className="bg-white text-black">
                <GeneralInfoCard {...packGeneral} />
                {role === 'Artist' && <ArtistSpecifics {...packArtist} />}
                {role === 'Fan' && <FanSpecifics {...packFan} />}
                {role === 'Venue' && <VenueSpecifics {...packVenue} />}
            </Card>
        </Container >
    )
}

export default BigCard