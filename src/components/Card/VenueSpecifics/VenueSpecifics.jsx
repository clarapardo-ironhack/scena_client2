import { Col, Card } from "react-bootstrap"
import Map from '../../../components/Map/Map'
import mapsService from './../../../services/maps.service'
import axios from "axios"

const VenueSpecifics = ({ address, capacity }) => {

    let latitude
    let longitude

    mapsService
        .getCords(address.street, address.number, address.city)
        .then((data) => res.json(data) )
        .catch(err => res.json(err))

 {/* {latitude && longitude &&
                <Map
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBIi25v4-JoTyK0y0BM2wVKxutNUwqDb8w'
                    containerElement={<div style={{ height: '400px' }}></div>}
                    mapElement={<div style={{ height: '400px' }}></div>}
                    loadingElement={<p>CARGANDOOOO</p>}
                    address={address}
                />} */}
    
    
    return (
        <Col>
            <Card.Text>{address.street}, {address.number}, {address.city}</Card.Text>
            <Card.Text>{capacity}</Card.Text>
        </Col>
    )

}

export default VenueSpecifics