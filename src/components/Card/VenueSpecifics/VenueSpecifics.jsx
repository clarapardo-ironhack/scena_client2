import { Col, Card } from "react-bootstrap"
import Map from '../../../components/Map/Map'
import mapsService from './../../../services/maps.service'
import { useEffect, useState } from "react"


const VenueSpecifics = ({ address, capacity }) => {

    const [coordinates, setCoordinates] = useState([])
    const [mapLoading, setMapLoading] = useState()

    useEffect(() => {
        setMapLoading(true)
        posInfoMethod()
    }, [])


    const posInfoMethod = () => {
        mapsService
            .getCords(address)
            .then(({ data }) => {
                setMapLoading(false)
                let posInfo = [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]
                setCoordinates(posInfo)
            })
            .catch(err => console.log(err))
    }

    return (
        <Col>
            <Card.Text>{address.street}, {address.number},{address.postalCode}, {address.city}</Card.Text>
            <Card.Text>{capacity}</Card.Text>
            {coordinates && !mapLoading &&
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