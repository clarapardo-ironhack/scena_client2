import { Col, Card } from "react-bootstrap"

const VenueSpecifics = ({ adress, capacity }) => {

    return (
        <Col>
            <Card.Text>{adress}</Card.Text>
            <Card.Text>{capacity}</Card.Text>
        </Col>
    )

}

export default VenueSpecifics