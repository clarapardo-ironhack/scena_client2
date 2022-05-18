import { Card, Col } from "react-bootstrap"

const ArtistSpecifics = ({ styles, label }) => {


    return (
        <Col>
            {
                styles
                &&
                <ul>
                    {styles.map((e,index) => {
                        return <li key={index}>{e}</li>
                    })}
                </ul>
            }

            {label && <Card.Text>{label}</Card.Text>}

        </Col>
    )

}

export default ArtistSpecifics