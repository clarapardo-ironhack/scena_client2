import { Col } from "react-bootstrap"
import TinyCard from "../TinyCard/TinyCard"

const LikedByFan = ({ LikedEvents, LikedArtists, LikedVenues }) => {

    return (
        <>
            {
                LikedArtists
                &&
                <Col>
                    {
                        LikedArtists.map((artist,index) => {
                            console.log(artist)
                            return (
                                <TinyCard {...artist}/>
                            )
                        })
                    }
                </Col>
            }

            {/* {
                LikedVenues
                &&
                <Col>
                    {
                            LikedVenues.map((venue, index) => {
                                console.log(venue)
                            return (
                                <TinyCard {...venue} />
                            )
                        })
                    }
                </Col>
            }

            {
                LikedEvents
                &&
                <Col>
                    {
                            LikedEvents.map((event, index) => {
                                console.log(event)
                            return (
                                <TinyCard {...event} />
                            )
                        })
                    }
                </Col>
            } */}
        </>
    )

}

export default LikedByFan
