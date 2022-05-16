import './Map.css'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'
import mapsService from '../../services/maps.service'


const Map = withScriptjs(withGoogleMap(() => {



    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 40.38031946761428, lng: - 3.695209174621581 }}

        >
            <Marker position={{ lat: 40.38031946761428, lng: - 3.695209174621581 }} />

        </GoogleMap>


    )
}))

export default Map