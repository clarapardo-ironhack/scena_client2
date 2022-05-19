import { Card, Col } from "react-bootstrap"
import "../ArtistSpecifics/ArtistSpecifics.css"
const ArtistSpecifics = ({ styles, label }) => {


    return (
        <Col>
            {
                styles
                &&
                <span>
                    {
                        styles.map((element, index) => {
                            return <span key={index}>{element}</span>
                        })
                    }
                </span>
            }

            {label && <Card.Text>{label}</Card.Text>}

        </Col>
    )

}

export default ArtistSpecifics