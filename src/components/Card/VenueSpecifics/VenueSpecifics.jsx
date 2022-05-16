import { Col, Card } from "react-bootstrap"
import Map from '../../../components/Map/Map'
import mapsService from './../../../services/maps.service'
import axios from "axios"
import { useEffect, useState } from "react"

const VenueSpecifics = ({ address, capacity }) => {

    const [coordinates, setCoordinates] = useState([])
    
    useEffect(() => {
        posInfoMethod()
    },[])

    

    const posInfoMethod = () => {
        mapsService
            .getCords(address.street, address.number, address.city)
        .then(({ data }) => {

            let posInfo = [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]
            // latitude.push(data.results[0].geometry.location.lat)
            // longitude.push(data.results[0].geometry.location.lng)

            setCoordinates(posInfo)
        })
        .catch(err => console.log(err))
    }

    return (
        <Col>
            <Card.Text>{address.street}, {address.number}, {address.city}</Card.Text>
            <Card.Text>{capacity}</Card.Text>
            {coordinates &&
                <Map
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBIi25v4-JoTyK0y0BM2wVKxutNUwqDb8w'
                    containerElement={<div style={{ height: '400px' }}></div>}
                    mapElement={<div style={{ height: '400px' }}></div>}
                    loadingElement={<p>CARGANDOOOO</p>}
                    lat={coordinates[0]}
                    lng={coordinates[1]}
                />}
        </Col>
    )

}

export default VenueSpecifics