import { Card, Col } from "react-bootstrap"

const ArtistSpecifics = ({ style1, style2, style3, label }) => {


    return (
        <Col>
            {
                style1
                &&
                <ul>
                    <li>{style1}</li>
                    {style2 && <li>{style2}</li>}
                    {style3 && <li>{style3}</li>}
                </ul>
            }

            {label && <Card.Text>{label}</Card.Text>}

        </Col>
    )

}

export default ArtistSpecifics