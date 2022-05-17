import { Col } from "react-bootstrap"
import TinyCard from "../TinyCard/TinyCard"
import TinyEventCard from "../../EventCard/TinyEventCard/TinyEventCard"

const likedByFan = ({ likedEvents, likedArtists, likedVenues }) => {

    return (
        <>
            {
                likedArtists
                &&
                <Col>
                    {
                        likedArtists.map((artist, index) => {

                            return (
                                <TinyCard {...artist} />
                            )
                        })
                    }
                </Col>
            }

            {
                likedVenues
                &&
                <Col>
                    {
                        likedVenues.map((venue, index) => {
                            return (
                                <TinyCard {...venue} />
                            )
                        })
                    }
                </Col>
            }

            {
                likedEvents
                &&
                <Col>
                    {
                        likedEvents.map((event, index) => {
                            return (
                                <TinyEventCard {...event} />
                            )
                        })
                    }
                </Col>
            }
        </>
    )

}

export default likedByFan
